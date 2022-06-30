import { SwiftKotlinConverter } from "../SwiftKotlinConverter.ts";
import { isTObject, TArray, TObject } from "../../util/Tree.ts";
import { TreeWalk } from "../../util/TreeWalk.ts";
import { convert_literalExpression__primaryExpression } from "./literalExpression.ts";

export function convert_primaryExpression__primaryExpression(
  self: SwiftKotlinConverter,
  path: string[],
  input: TArray,
): TObject {
  if (TreeWalk.isEmptyArray(input)) return {};
  if (!isTObject(input[0])) return {};

  const [key, elements] = TreeWalk.firstKeyValueOrNull(input[0]);
  if (!key) return {};

  switch (key) {
    case "literal_expression": {
      return convert_literalExpression__primaryExpression(
        self,
        [...path, key],
        elements,
      );
    }
    default: {
      return {};
    }
  }
}
