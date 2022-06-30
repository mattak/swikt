import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {createSimpleIdentifier} from "../util/identifier.ts";
import {convert_type__type_} from "../types/type.ts";

export function convert_pattern__variableDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const name = TreeWalk.firstElementOrNullByKeys(['identifier_pattern', 'identifier'], input);
  const type = TreeWalk.firstArrayOrNullByKeys(['type_annotation', 'type'], input);
  if (!name) return {};
  if (!type) {
    return {
      "variableDeclaration": [
        createSimpleIdentifier(name),
      ]
    }
  } else {
    const resultType = convert_type__type_(self, [...path, 'type_annotation', 'type'], type);
    return {
      "variableDeclaration": [
        createSimpleIdentifier(name),
        ":",
        resultType,
      ]
    }
  }
}
