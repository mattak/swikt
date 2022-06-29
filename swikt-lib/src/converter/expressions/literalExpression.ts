import {convert_literal__primaryExpression} from "./literal.ts";
import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {isTObject, TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";

export function convert_literalExpression__primaryExpression(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  if (TreeWalk.isEmptyArray(input)) return {}
  if (!isTObject(input[0])) return {}

  const [key, elements] = TreeWalk.firstKeyValueOrNull(input[0]);
  if (!key) return {}

  switch (key) {
    case 'literal': {
      return convert_literal__primaryExpression(self, [...path, key], elements);
    }
    // case 'array_literal': {
    //
    // }
    // case 'dictionary_literal': {
    //
    // }
    // case 'playground_literal': {
    //
    // }
    default: {
      return {}
    }
  }
}

