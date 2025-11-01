# Define the target directory and the required files
$TARGET_DIR = "files"
$REQUIRED_FILES = @("Invalid_Repositories.md", "invalid_repositories.json", "repositories.json")

# Function to check for required files in the target directory
function Check-Files {
    param (
        [string]$dir
    )
    foreach ($file in $REQUIRED_FILES) {
        if (-Not (Test-Path "$dir\$file")) {
            return $false
        }
    }
    return $true
}

# Function to read JSON files and echo attributes and values
function Read-Json {
    param (
        [string]$json_file
    )
    $file_name = Split-Path -Leaf $json_file

    # Use ConvertFrom-Json to extract keys and values from the JSON file
    $json_content = Get-Content $json_file | ConvertFrom-Json
    foreach ($entry in $json_content.PSObject.Properties) {
        Write-Output "$file_name - $($entry.Name): $($entry.Value)"
    }
}

# Recursive search for the target directory
function Search-And-Copy {
    $dirs = Get-ChildItem -Recurse -Directory -Filter $TARGET_DIR
    foreach ($dir in $dirs) {
        if (Check-Files $dir.FullName) {
            Write-Output "Found all required files in: $($dir.FullName)"
            foreach ($file in $REQUIRED_FILES) {
                if ($file -like "*.json") {
                    Read-Json "$($dir.FullName)\$file"  # Read and echo JSON attributes
                }
                Copy-Item "$($dir.FullName)\$file" -Destination (Get-Location)
                Write-Output "Copied $file to $(Get-Location)"
            }
            return
        }
    }
    Write-Output "No valid 'files' directory containing all required files found."
}

# Execute the search and copy function
Search-And-Copy
