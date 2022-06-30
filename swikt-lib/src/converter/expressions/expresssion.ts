import { SwiftKotlinConverter } from "../SwiftKotlinConverter.ts";
import { TArray, TObject } from "../../util/Tree.ts";
import { TreeWalk } from "../../util/TreeWalk.ts";
import { convert_postfixExpression__expression } from "./postfixExpression.ts";

export function convert_expression__expression(
  self: SwiftKotlinConverter,
  path: string[],
  input: TArray,
): TObject {
  // try-operator? await-operator? prefix-expression infix-expressions?
  const prefixExpression = TreeWalk.firstArrayOrNullByKeys([
    "prefix_expression",
    "postfix_expression",
  ], input);
  if (!prefixExpression) return {};
  return convert_postfixExpression__expression(self, [
    ...path,
    "prefix_expression",
    "postfix_expression",
  ], prefixExpression);
}
