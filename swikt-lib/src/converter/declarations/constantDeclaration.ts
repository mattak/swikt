import {TArray, TArrayElement, TObject} from "../../util/Tree.ts";
import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";

export function convert_constantDeclaration__propertyDeclarations(self: SwiftKotlinConverter, path: string[], input: TArray): TObject[] {
  const initializerList = TreeWalk.firstArrayOrNullByKeys(['pattern_initializer_list'], input);
  if (!initializerList) return [];
  return initializerList.flatMap((x: TArrayElement) => {
    const [key, elements] = TreeWalk.firstKeyValueOrNull(x)
    if (!key) return [];
    return [convert_patternInitializer__propertyDeclaration(self, [...path, 'pattern_initializer'], elements)];
  });
}

export function convert_patternInitializer__propertyDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const name = TreeWalk.firstElementOrNullByKeys(['pattern', 'identifier_pattern', 'identifier'], input) ?? '';
  const value = TreeWalk.firstElementOrNullByKeys(['initializer', 'expression', 'prefix_expression', 'postfix_expression', 'primary_expression', 'literal_expression', 'literal', 'numeric_literal', 'integer_literal'], input) ?? '';
  return {
    "propertyDeclaration": [
      "val",
      {
        "variableDeclaration": [
          {
            "simpleIdentifier": [
              name
            ]
          }
        ]
      },
      "=",
      {
        "expression": [
          {
            "disjunction": [
              {
                "conjunction": [
                  {
                    "equality": [
                      {
                        "comparison": [
                          {
                            "infixOperation": [
                              {
                                "elvisExpression": [
                                  {
                                    "infixFunctionCall": [
                                      {
                                        "rangeExpression": [
                                          {
                                            "additiveExpression": [
                                              {
                                                "multiplicativeExpression": [
                                                  {
                                                    "asExpression": [
                                                      {
                                                        "prefixUnaryExpression": [
                                                          {
                                                            "postfixUnaryExpression": [
                                                              {
                                                                "primaryExpression": [
                                                                  {
                                                                    "literalConstant": [
                                                                      value,
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  };
}