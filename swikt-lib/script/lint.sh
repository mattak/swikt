#!/bin/bash

set -eu

git status --short |
  awk '{print $2}' | 
  grep -E '^(src|tests)' |
  grep -E '\.ts$' |
  xargs deno lint
