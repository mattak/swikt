import { SwiftKotlinConverter } from "../SwiftKotlinConverter.ts";
import { TArray, TObject } from "../../util/Tree.ts";
import { TreeWalk } from "../../util/TreeWalk.ts";
import { convert_primaryExpression__primaryExpression } from "./primaryExpression.ts";
import { createExpressionByPrimaryExpression } from "../util/expression.ts";

export function convert_postfixExpression__expression(
  self: SwiftKotlinConverter,
  path: string[],
  input: TArray,
): TObject {
  if (TreeWalk.isEmptyArray(input)) return {};
  if (typeof input[0] === "string") return {};

  const [key, elements] = TreeWalk.firstKeyValueOrNull(input[0]);
  if (!key) return {};

  switch (key) {
    case "primary_expression": {
      const primaryExpression = convert_primaryExpression__primaryExpression(
        self,
        [...path, key],
        elements,
      );
      return createExpressionByPrimaryExpression(primaryExpression);
    }
    // case 'function_call_expression': {
    //
    // }
    // case 'initializer_expression': {
    //
    // }
    // case 'explicit_member_expression': {
    //
    // }
    // case 'postfix_self_expression': {
    //
    // }
    // case 'subscript_expression': {
    //
    // }
    // case 'forced_value_expression': {
    //
    // }
    // case 'optional_chaining_expression': {
    //
    // }
    default: {
      return {};
    }
  }
}
