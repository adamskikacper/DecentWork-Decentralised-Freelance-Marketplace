#!/bin/bash

# This script removes all comments from the dashboard components

# Find all TypeScript and TSX files in the dashboard directory
find src/components/Dashboard -type f \( -name "*.ts" -o -name "*.tsx" \) | while read -r file; do
  echo "Processing $file"
  
  # Remove JSDoc comments (/**...*/)
  sed -i '' -e '/\/\*\*/,/\*\//d' "$file"
  
  # Remove single-line comments (// ...)
  sed -i '' -e 's/\/\/.*$//' "$file"
  
  # Remove empty lines
  sed -i '' -e '/^[[:space:]]*$/d' "$file"
  
  echo "Processed $file"
done

echo "All comments removed from dashboard components"
