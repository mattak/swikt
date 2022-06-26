import {TArray} from "../../../../src/util/Tree.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {
  convert_constantDeclaration__propertyDeclaration
} from "../../../../src/converter/declarations/constantDeclaration.ts";

const converter = new SwiftKotlinConverter();
Deno.test('convert_propertyDeclaration__propertyDeclaration', () => {
  const input: TArray = [
    "let",
    {
      "pattern_initializer_list": [
        {
          "pattern_initializer": [
            {
              "pattern": [
                {
                  "identifier_pattern": [
                    {
                      "identifier": [
                        "Sample"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "initializer": [
                "=",
                {
                  "expression": [
                    {
                      "prefix_expression": [
                        {
                          "postfix_expression": [
                            {
                              "primary_expression": [
                                {
                                  "literal_expression": [
                                    {
                                      "literal": [
                                        {
                                          "numeric_literal": [
                                            {
                                              "integer_literal": [
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
  ];

  const output = convert_constantDeclaration__propertyDeclaration(converter, [], input);
  assertEquals(output, {
    "propertyDeclaration": [
      "val",
      {
        "variableDeclaration": [
          {
            "simpleIdentifier": [
              "Sample"
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
  });
});