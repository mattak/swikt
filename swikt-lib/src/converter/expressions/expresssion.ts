import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {isTObject, TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {convert_literalExpression__primaryExpression} from "./literalExpression.ts";

export function convert_expression__expression(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  // try-operator? await-operator? prefix-expression infix-expressions?
  const prefixExpression = TreeWalk.firstArrayOrNullByKeys(['prefix_expression', 'postfix_expression'], input);
  if (!prefixExpression) return {}
  return convert_postfixExpression__expression(self, [...path, 'prefix_expression', 'postfix_expression'], prefixExpression);
}

export function convert_postfixExpression__expression(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  if (TreeWalk.isEmptyArray(input)) return {}
  if (typeof input[0] === 'string') return {}

  const [key, elements] = TreeWalk.firstKeyValueOrNull(input[0]);
  if (!key) return {}

  switch (key) {
    case 'primary_expression': {
      return convert_primaryExpression__expression(self, [...path, key], elements);
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

export function convert_primaryExpression__expression(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  if (TreeWalk.isEmptyArray(input)) return {}
  if (!isTObject(input[0])) return {}

  const [key, elements] = TreeWalk.firstKeyValueOrNull(input[0]);
  if (!key) return {}

  switch (key) {
    case 'literal_expression': {
      return convert_literalExpression__primaryExpression(self, [...path, key], elements);
    }
    default: {
      return {}
    }
  }
}
