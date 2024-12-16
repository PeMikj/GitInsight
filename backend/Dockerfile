# Use the official Python image as the base image
FROM python:3.10

# Set the working directory inside the container
WORKDIR /backend

# Install tree command
RUN apt-get update && apt-get install -y tree

# Copy the requirements file to the working directory
COPY requirements.txt ./

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Start the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]