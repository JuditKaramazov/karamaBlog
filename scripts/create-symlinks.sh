#!/bin/bash

paths=(
  "content:src/content"
  "public/post-kbd.css"
  "src/components/ThemeSwitch/theme.cjs:public/theme.js"
)

symlink_count=0

for path_pair in "${paths[@]}"; do
  IFS=":" read -r source target <<< "$path_pair"

  if [ -e "$PWD/$target" ]; then
    continue
  fi

  ln -s "$PWD/$source" "$PWD/$target"
  symlink_count=$((symlink_count + 1))
done

echo "✔️ [create-symlinks] Created $symlink_count symlinks."
