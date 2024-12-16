from fastapi import FastAPI, HTTPException
import git
import os

app = FastAPI()

@app.post("/clone-repo/")
async def clone_repo(repo_url: str):
    repo_name = repo_url.split("/")[-1].replace(".git", "")
    if not os.path.exists(repo_name):
        git.Repo.clone_from(repo_url, repo_name)
    return {"message": f"Repository {repo_name} cloned successfully."}

def get_directory_structure(rootdir):
    """
    Creates a nested dictionary that represents the folder structure of rootdir.
    :param rootdir: Root directory to analyze
    :return: A dictionary representing the directory structure
    """
    dir_structure = {}

    for dirpath, dirnames, filenames in os.walk(rootdir):
        # Get the relative path from the root directory
        folder = os.path.relpath(dirpath, rootdir)
        # Start at the root of the structure
        subdir = dir_structure
        
        # Navigate to the correct subdirectory level in the structure
        if folder != '.':
            for part in folder.split(os.sep):
                subdir = subdir.setdefault(part, {})
        
        # Add subdirectories
        for dirname in dirnames:
            subdir[dirname] = {}
        
        # Add files
        for filename in filenames:
            subdir[filename] = None

    return dir_structure

@app.get("/repo-structure/")
async def repo_structure(repo_name: str):
    if not os.path.exists(repo_name):
        raise HTTPException(status_code=404, detail="Repository not found")
    structure = get_directory_structure(repo_name)
    return structure