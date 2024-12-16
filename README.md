The project enables users to load a GitHub repository, select files or folders for vectorization, and ask questions about the code, leveraging embeddings stored in a Faiss database for intelligent retrieval. Built with FastAPI for the backend, React for the frontend, and LangChain for code processing, it uses Faiss for vector storage and OpenAI/Hugging Face models for embeddings, ensuring scalability and efficiency.

Sprint 1: Repository Loading and Structure Display
Goals:

    Load a GitHub repository.
    Display its structure with selectable files and folders.

Tasks:

    Backend:
        set up environment and create requirments file
        Create an API endpoint to clone a GitHub repository using GitPython.
        Create an API endpoint to extract the repository structure as a tree.
    Frontend:
        Implement a form for entering a GitHub URL.
        Display the repository structure as a tree view with checkboxes.
        Set all items as selected by default.

Deliverable:

The user can input a GitHub URL, view the repository structure in a tree format, and select files and folders for processing.
Sprint 2: File Processing and Content Extraction
Goals:

    Process selected files and extract meaningful content.

Tasks:

    Backend:
        Extract content from selected files (e.g., code blocks, comments, or text).
        Use LangChain to parse and structure the extracted content.
    Frontend:
        Implement a "Submit" button to send selected files/folders to the backend for processing.
        Show a progress indicator during the processing stage.

Deliverable:

The user can submit selected files for processing, and the backend extracts and structures the content.
Sprint 3: Vectorization and Faiss Database Creation
Goals:

    Generate embeddings for the extracted content.
    Store embeddings in a Faiss database.

Tasks:

    Backend:
        Use a pre-trained embedding model (e.g., OpenAI, Hugging Face) to generate vector representations of the extracted content.
        Save these vectors in a Faiss database.
    Frontend:
        Display a success notification once vectorization is complete.

Deliverable:

The selected data is processed, vectorized, and stored in a Faiss database.
Sprint 4: Search and Answering Questions
Goals:

    Enable question answering using the Faiss database.

Tasks:

    Backend:
        Develop an API endpoint to accept user questions.
        Query the Faiss database to find relevant vectorized content.
        Use LangChain to construct meaningful answers.
    Frontend:
        Create a form to input questions.
        Display answers in a readable format with code snippets highlighted.

Deliverable:

The user can ask questions about the repository, and the system provides relevant answers using the Faiss database.