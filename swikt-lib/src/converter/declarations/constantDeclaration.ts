import {TArray, TObject} from "../../util/Tree.ts";
import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";

export function convert_constantDeclaration__propertyDeclarations(self: SwiftKotlinConverter, path: string[], input: TArray): TObject[] {
  return []
}

export function convert_constantDeclaration__propertyDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const name = TreeWalk.firstElementOrNullByKeys(['pattern_initializer_list', 'pattern_initializer', 'pattern', 'identifier_pattern', 'identifier'], input) ?? '';
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
                                                                      "1"
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