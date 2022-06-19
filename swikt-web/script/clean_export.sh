#!/bin/sh

set -ue

(
  cd ../submodules/antlr4/runtime/Typescript/
  yarn clean && yarn install && yarn build
)

(
  cd ../swikt-lib/
  yarn clean && yarn install && yarn build
)

yarn clean && yarn install && yarn export && yarn open
yarn start
