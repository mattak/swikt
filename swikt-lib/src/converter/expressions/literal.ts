import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {isTObject, TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {
  createPrimaryExpression_lineStringContent,
  createPrimaryExpression_LiteralConstant
} from "../util/expression.ts";

export function convert_literal__primaryExpression(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  if (TreeWalk.isEmptyArray(input)) return {}
  if (!isTObject(input[0])) return {}

  const [key, elements] = TreeWalk.firstKeyValueOrNull(input[0]);
  if (!key) return {}

  switch (key) {
    case 'numeric_literal': {
      return convert_numericLiteral__primaryExpression(self, [...path, key], elements);
    }
    case 'string_literal': {
      return convert_stringLiteral__primaryExpression(self, [...path, key], elements);
    }
    // case 'regular_expression_literal': {
    //   return {}
    // }
    case 'boolean_literal': {
      return convert_booleanLiteral__primaryExpression(self, path, elements);
    }
    case 'nil_literal': {
      return createPrimaryExpression_LiteralConstant("null")
    }
    default: {
      return {}
    }
  }
}

export function convert_booleanLiteral__primaryExpression(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  if (TreeWalk.isEmptyArray(input)) return {}
  if (isTObject(input[0])) return {}
  const value = input[0] as string;
  return createPrimaryExpression_LiteralConstant(value);
}

export function convert_numericLiteral__primaryExpression(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  if (TreeWalk.isEmptyArray(input)) return {}
  if (typeof input[0] === 'string') return createPrimaryExpression_LiteralConstant(input[0]);
  if (!isTObject(input[0])) return {}

  const [key, elements] = TreeWalk.firstKeyValueOrNull(input[0]);
  if (!key) return {}

  switch (key) {
    case 'integer_literal': {
      if (typeof elements[0] === 'string') {
        return createPrimaryExpression_LiteralConstant(elements[0]);
      }
      break
    }
    case 'float_literal': {
      if (typeof elements[0] === 'string') {
        return createPrimaryExpression_LiteralConstant(elements[0]);
      }
      break
    }
  }

  return {}
}

export function convert_stringLiteral__primaryExpression(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const array = TreeWalk.firstArrayOrNullByKeys(['interpolated_string_literal'], input);
  if (!array || array.length < 3) return {}
  const message = array[1];
  if (typeof message === "string") return createPrimaryExpression_lineStringContent(message);
  return {}
}