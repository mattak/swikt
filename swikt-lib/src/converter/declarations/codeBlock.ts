import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {convert_statements__statements} from "../statements/statements.ts";

export function convert_codeBlock__block(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const statements = TreeWalk.firstArrayOrNullByKeys(['statements'], input);
  if (!statements) return {
    "block": [
      "{",
      "}",
    ],
  };

  const result = convert_statements__statements(self, [...path, 'statements'], statements);
  if (TreeWalk.isEmptyObject(result)) return {
    "block": [
      "{",
      "}",
    ]
  };

  return {
    "block": [
      "{",
      result,
      "}",
    ]
  }
}