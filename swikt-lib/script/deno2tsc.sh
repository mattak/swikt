#!/bin/sh

set -ue 

if [ $# -lt 2 ]; then
  cat <<__USAGE__
usage: $0 <in_dir> <out_dir>
__USAGE__
  exit 1
fi

IN_DIR=$1
OUT_DIR=$2

if [ $OUT_DIR ]; then
  rm -rf $OUT_DIR/
fi 

rsync -av $IN_DIR/ $OUT_DIR/ > /dev/null
find $OUT_DIR -type f -name '*.js' -or -name '*.ts' | xargs perl -i -pe 's/^(import .+ from .+)\.(ts|js)/\1/g'
find $OUT_DIR -type f -name '*.js' -or -name '*.ts' | xargs perl -i -pe 's/^(\} from .+)\.(ts|js)/\1/g'
find $OUT_DIR -type f -name '*.js' -or -name '*.ts' | xargs perl -i -pe 's/^(export .+ from .+)\.(ts|js)/\1/g'

