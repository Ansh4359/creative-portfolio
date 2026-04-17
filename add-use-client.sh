#!/bin/bash

cd "$(dirname "$0")/components"

find . -name "*.tsx" -type f | while read file; do
  if ! grep -q "\"use client\"" "$file" && ! grep -q "'use client'" "$file"; then
    echo "Adding 'use client' to $file"
    # Create temporary file with 'use client' at the top
    echo "\"use client\";" > temp
    cat "$file" >> temp
    mv temp "$file"
  else
    echo "Already has 'use client': $file"
  fi
done