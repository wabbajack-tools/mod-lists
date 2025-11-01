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

# Function to read JSON files and echo attributes and values
read_json() {
    local json_file="$1"
    local file_name=$(basename "$json_file")

    # Use jq to extract keys and values from the JSON file
    jq -r 'to_entries | .[] | "\(.key): \(.value)"' "$json_file" | while read -r line; do
        echo "$file_name - $line"
    done
}

# Recursive search for the target directory
search_and_copy() {
    for dir in $(find . -type d -name "$TARGET_DIR"); do
        if check_files "$dir"; then
            echo "Found all required files in: $dir"
            for file in "${REQUIRED_FILES[@]}"; do
                if [[ "$file" == *.json ]]; then
                    read_json "$dir/$file"  # Read and echo JSON attributes
                fi
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
