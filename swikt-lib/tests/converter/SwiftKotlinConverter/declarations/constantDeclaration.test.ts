import {TArray} from "../../../../src/util/Tree.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {
  convert_constantDeclaration__propertyDeclarations,
  convert_patternInitializer__propertyDeclaration
} from "../../../../src/converter/declarations/constantDeclaration.ts";

const converter = new SwiftKotlinConverter();

Deno.test('convert_patternInitializer__propertyDeclaration', () => {
  const input: TArray = [
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
  ];

  const output = convert_patternInitializer__propertyDeclaration(converter, [], input);
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

Deno.test('convert_constantDeclaration__propertyDeclarations', () => {
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
                        "a"
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
        },
        ",",
        {
          "pattern_initializer": [
            {
              "pattern": [
                {
                  "identifier_pattern": [
                    {
                      "identifier": [
                        "b"
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
                                                "2"
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

  const output = convert_constantDeclaration__propertyDeclarations(converter, [], input);
  assertEquals(output, [
    {
      "propertyDeclaration": [
        "val",
        {
          "variableDeclaration": [
            {
              "simpleIdentifier": [
                "a"
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
    },
    {
      "propertyDeclaration": [
        "val",
        {
          "variableDeclaration": [
            {
              "simpleIdentifier": [
                "b"
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
                                                                        "2"
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
        }
      ]
    },
  ]);
});

