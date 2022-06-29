import {createTObject, TObject} from "../../util/Tree.ts";

export function createLiteralConstantExpression(value: string): TObject {
  return createTObject([
      "expression", "disjunction", "conjunction", "equality", "comparison", "infixOperation", "elvisExpression",
      "infixFunctionCall", "rangeExpression", "additiveExpression", "multiplicativeExpression", "asExpression",
      "prefixUnaryExpression", "postfixUnaryExpression", "primaryExpression", "literalConstant"
    ],
    [value]
  );
}

export function createJumpReturnExpression(expression: TObject): TObject {
  return createTObject([
      "expression", "disjunction", "conjunction", "equality", "comparison", "infixOperation", "elvisExpression",
      "infixFunctionCall", "rangeExpression", "additiveExpression", "multiplicativeExpression", "asExpression",
      "prefixUnaryExpression", "postfixUnaryExpression", "primaryExpression", "jumpExpression"
    ],
    [
      "return",
      expression,
    ]
  );
}

export function createPrimaryExpression_LiteralConstant(value: string): TObject {
  return createTObject(["primaryExpression", "literalConstant"], [value]);
}

export function createPrimaryExpression_lineStringContent(value: string): TObject {
  const lineStringContent = createTObject(["lineStringContent"], [value]);
  return createTObject([
    "primaryExpression",
    "stringLiteral",
    "lineStringLiteral",
  ], ["\"", lineStringContent, "\""]);
}
