#!/usr/bin/env bash
set -euo pipefail

# Usage: ./examples/isolated-worktree.sh /path/to/repository /tmp/agent-eval-worktree
# Creates an isolated worktree. It does not copy secrets or deploy configuration.

REPO=${1:?repository path required}
DEST=${2:?destination path required}

if [[ -e "$DEST" ]]; then
  printf 'destination already exists: %s\n' "$DEST" >&2
  exit 2
fi

git -C "$REPO" worktree add --detach "$DEST" HEAD
printf 'created isolated worktree: %s\n' "$DEST"
printf 'review diff before removing it; cleanup with git -C %q worktree remove --force %q\n' "$REPO" "$DEST"
