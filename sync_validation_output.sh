#!/bin/bash

# Define the target directory and the required files
TARGET_DIR="files"
REQUIRED_FILES=("Invalid_Repositories.md" "invalid_repositories.json" "repositories.json")

# Function to check for required files in the target directory
check_files() {
    for file in "${REQUIRED_FILES[@]}"; do
        if [[ ! -f "$1/$file" ]]; then
            return 1
        fi
    done
    return 0
}

# Recursive search for the target directory
search_and_copy() {
    for dir in $(find . -type d -name "$TARGET_DIR"); do
        if check_files "$dir"; then
            echo "Found all required files in: $dir"
            for file in "${REQUIRED_FILES[@]}"; do
                cp "$dir/$file" .
                echo "Copied $file to $(pwd)"
            done
            return
        fi
    done
    echo "No valid 'files' directory containing all required files found."
}

# Execute the search and copy function
search_and_copy
