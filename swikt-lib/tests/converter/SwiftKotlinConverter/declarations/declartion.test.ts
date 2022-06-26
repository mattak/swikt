import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {TArray} from "../../../../src/util/Tree.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {convert_declaration__declarations} from "../../../../src/converter/declarations/declaration.ts";

const converter = new SwiftKotlinConverter();

Deno.test('convert_declaration__declaration/default', () => {
  const input: TArray = [];
  const output = convert_declaration__declarations(converter, [], input);
  assertEquals(output, []);
});

Deno.test('convert_declaration__declaration/function_declaration', () => {
  const input: TArray = [
    {
      "function_declaration": [
        {
          "function_head": [
            "func"
          ]
        },
        {
          "function_name": [
            {
              "identifier": [
                "build"
              ]
            }
          ]
        },
        {
          "function_signature": [
            {
              "parameter_clause": [
                "(",
                ")"
              ]
            }
          ]
        },
        {
          "function_body": [
            {
              "code_block": [
                "{",
                "}"
              ]
            }
          ]
        }
      ]
    }
  ];
  const output = convert_declaration__declarations(converter, ['declaration'], input);
  assertEquals(output, [{
    "declaration": [
      {
        "functionDeclaration": [
          "fun",
          {
            "simpleIdentifier": [
              "build"
            ]
          },
          {
            "functionValueParameters": [
              "(",
              ")"
            ]
          },
          {
            "functionBody": [
              {
                "block": [
                  "{",
                  "}"
                ]
              }
            ]
          }
        ]
      }
    ]
  }]);
});

Deno.test('convert_declaration__declaration/struct_declaration', () => {
  const input: TArray = [
    {
      "struct_declaration": [
        "struct",
        {
          "struct_name": [
            {
              "identifier": [
                "Hoge"
              ]
            }
          ]
        },
        {
          "struct_body": [
            "{",
            {
              "struct_members": []
            },
            "}"
          ]
        }
      ]
    }
  ];
  const output = convert_declaration__declarations(converter, ['declaration'], input);
  assertEquals(output, [{
    "declaration": [
      {
        "objectDeclaration": [
          "object",
          {
            "simpleIdentifier": [
              "Hoge"
            ]
          },
          {
            "classBody": [
              "{",
              {
                "classMemberDeclarations": []
              },
              "}"
            ]
          }
        ]
      }
    ]
  }]);
});

Deno.test('convert_declaration__declaration/propertyDeclaration', () => {
  const input: TArray = [
    {
      "constant_declaration": [
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
            }
          ]
        }
      ]
    }
  ];
  const output = convert_declaration__declarations(converter, ['declaration'], input);
  assertEquals(output, [
    {
      "declaration": [
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
            }
          ]
        }
      ]
    }
  ]);
});
