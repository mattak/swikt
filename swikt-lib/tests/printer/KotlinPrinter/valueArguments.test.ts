import {KotlinPrinter} from "../../../src/printer/KotlinPrinter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const printer = new KotlinPrinter();

Deno.test('valueArguments/shallow', () => {
  const tree: string[] = [];
  const input = {
    prefixUnaryExpression: [
      {
        postfixUnaryExpression: [
          {
            primaryExpression: [
              {
                simpleIdentifier: [
                  'Request'
                ]
              }
            ]
          },
          {
            postfixUnarySuffix: [
              {
                callSuffix: [
                  {
                    valueArguments: [
                      '(',
                      ')'
                    ]
                  }
                ]
              }
            ]
          },
          {
            postfixUnarySuffix: [
              {
                navigationSuffix: [
                  {
                    memberAccessOperator: [
                      '.'
                    ]
                  },
                  {
                    simpleIdentifier: [
                      'apply'
                    ]
                  }
                ]
              }
            ]
          },
          {
            postfixUnarySuffix: [
              {
                callSuffix: [
                  {
                    annotatedLambda: [
                      {
                        lambdaLiteral: [
                          '{',
                          {
                            statements: [
                              {
                                statement: [
                                  {
                                    assignment: [
                                      {
                                        directlyAssignableExpression: [
                                          {
                                            simpleIdentifier: [
                                              'id'
                                            ]
                                          }
                                        ]
                                      },
                                      '=',
                                      {
                                        expression: [
                                          {
                                            disjunction: [
                                              {
                                                conjunction: [
                                                  {
                                                    equality: [
                                                      {
                                                        comparison: [
                                                          {
                                                            infixOperation: [
                                                              {
                                                                elvisExpression: [
                                                                  {
                                                                    infixFunctionCall: [
                                                                      {
                                                                        rangeExpression: [
                                                                          {
                                                                            additiveExpression: [
                                                                              {
                                                                                multiplicativeExpression: [
                                                                                  {
                                                                                    asExpression: [
                                                                                      {
                                                                                        prefixUnaryExpression: [
                                                                                          {
                                                                                            postfixUnaryExpression: [
                                                                                              {
                                                                                                primaryExpression: [
                                                                                                  {
                                                                                                    literalConstant: [
                                                                                                      '1'
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
                              },
                              {
                                semis: [
                                  ''
                                ]
                              }
                            ]
                          },
                          '}'
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
  const output = printer.print(tree, input);
  assertEquals(output, [
    "Request().apply {",
    "  id = 1",
    "}"
  ]);
});

Deno.test('valueArguments/multiple', () => {
  const tree: string[] = [];
  const input = {
    prefixUnaryExpression: [
      {
        postfixUnaryExpression: [
          {
            primaryExpression: [
              {
                simpleIdentifier: [
                  'listOf'
                ]
              }
            ]
          },
          {
            postfixUnarySuffix: [
              {
                callSuffix: [
                  {
                    valueArguments: [
                      '(',
                      {
                        valueArgument: [
                          {
                            expression: [
                              {
                                disjunction: [
                                  {
                                    conjunction: [
                                      {
                                        equality: [
                                          {
                                            comparison: [
                                              {
                                                infixOperation: [
                                                  {
                                                    elvisExpression: [
                                                      {
                                                        infixFunctionCall: [
                                                          {
                                                            rangeExpression: [
                                                              {
                                                                additiveExpression: [
                                                                  {
                                                                    multiplicativeExpression: [
                                                                      {
                                                                        asExpression: [
                                                                          {
                                                                            prefixUnaryExpression: [
                                                                              {
                                                                                postfixUnaryExpression: [
                                                                                  {
                                                                                    primaryExpression: [
                                                                                      {
                                                                                        simpleIdentifier: [
                                                                                          'Request'
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  },
                                                                                  {
                                                                                    postfixUnarySuffix: [
                                                                                      {
                                                                                        callSuffix: [
                                                                                          {
                                                                                            valueArguments: [
                                                                                              '(',
                                                                                              ')'
                                                                                            ]
                                                                                          }
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  },
                                                                                  {
                                                                                    postfixUnarySuffix: [
                                                                                      {
                                                                                        navigationSuffix: [
                                                                                          {
                                                                                            memberAccessOperator: [
                                                                                              '.'
                                                                                            ]
                                                                                          },
                                                                                          {
                                                                                            simpleIdentifier: [
                                                                                              'apply'
                                                                                            ]
                                                                                          }
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  },
                                                                                  {
                                                                                    postfixUnarySuffix: [
                                                                                      {
                                                                                        callSuffix: [
                                                                                          {
                                                                                            annotatedLambda: [
                                                                                              {
                                                                                                lambdaLiteral: [
                                                                                                  '{',
                                                                                                  {
                                                                                                    statements: [
                                                                                                      {
                                                                                                        statement: [
                                                                                                          {
                                                                                                            assignment: [
                                                                                                              {
                                                                                                                directlyAssignableExpression: [
                                                                                                                  {
                                                                                                                    simpleIdentifier: [
                                                                                                                      'id'
                                                                                                                    ]
                                                                                                                  }
                                                                                                                ]
                                                                                                              },
                                                                                                              '=',
                                                                                                              {
                                                                                                                expression: [
                                                                                                                  {
                                                                                                                    disjunction: [
                                                                                                                      {
                                                                                                                        conjunction: [
                                                                                                                          {
                                                                                                                            equality: [
                                                                                                                              {
                                                                                                                                comparison: [
                                                                                                                                  {
                                                                                                                                    infixOperation: [
                                                                                                                                      {
                                                                                                                                        elvisExpression: [
                                                                                                                                          {
                                                                                                                                            infixFunctionCall: [
                                                                                                                                              {
                                                                                                                                                rangeExpression: [
                                                                                                                                                  {
                                                                                                                                                    additiveExpression: [
                                                                                                                                                      {
                                                                                                                                                        multiplicativeExpression: [
                                                                                                                                                          {
                                                                                                                                                            asExpression: [
                                                                                                                                                              {
                                                                                                                                                                prefixUnaryExpression: [
                                                                                                                                                                  {
                                                                                                                                                                    postfixUnaryExpression: [
                                                                                                                                                                      {
                                                                                                                                                                        primaryExpression: [
                                                                                                                                                                          {
                                                                                                                                                                            literalConstant: [
                                                                                                                                                                              '1'
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
                                                                                                      },
                                                                                                      {
                                                                                                        semis: [
                                                                                                          ''
                                                                                                        ]
                                                                                                      }
                                                                                                    ]
                                                                                                  },
                                                                                                  '}'
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
                        ]
                      },
                      ')'
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
  const output = printer.print(tree, input);
  assertEquals(output, [
    "listOf(",
    "  Request().apply {",
    "    id = 1",
    "  }",
    ")"
  ]);
});

Deno.test('valueArguments/multilineList', () => {
  const tree: string[] = [];
  const input = {
    postfixUnaryExpression: [
      {
        primaryExpression: [
          {
            simpleIdentifier: [
              'listOf'
            ]
          }
        ]
      },
      {
        postfixUnarySuffix: [
          {
            callSuffix: [
              {
                valueArguments: [
                  '(',
                  {
                    valueArgument: [
                      {
                        expression: [
                          {
                            disjunction: [
                              {
                                conjunction: [
                                  {
                                    equality: [
                                      {
                                        comparison: [
                                          {
                                            infixOperation: [
                                              {
                                                elvisExpression: [
                                                  {
                                                    infixFunctionCall: [
                                                      {
                                                        rangeExpression: [
                                                          {
                                                            additiveExpression: [
                                                              {
                                                                multiplicativeExpression: [
                                                                  {
                                                                    asExpression: [
                                                                      {
                                                                        prefixUnaryExpression: [
                                                                          {
                                                                            postfixUnaryExpression: [
                                                                              {
                                                                                primaryExpression: [
                                                                                  {
                                                                                    simpleIdentifier: [
                                                                                      'Request'
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              },
                                                                              {
                                                                                postfixUnarySuffix: [
                                                                                  {
                                                                                    callSuffix: [
                                                                                      {
                                                                                        valueArguments: [
                                                                                          '(',
                                                                                          ')'
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              },
                                                                              {
                                                                                postfixUnarySuffix: [
                                                                                  {
                                                                                    navigationSuffix: [
                                                                                      {
                                                                                        memberAccessOperator: [
                                                                                          '.'
                                                                                        ]
                                                                                      },
                                                                                      {
                                                                                        simpleIdentifier: [
                                                                                          'apply'
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              },
                                                                              {
                                                                                postfixUnarySuffix: [
                                                                                  {
                                                                                    callSuffix: [
                                                                                      {
                                                                                        annotatedLambda: [
                                                                                          {
                                                                                            lambdaLiteral: [
                                                                                              '{',
                                                                                              {
                                                                                                statements: [
                                                                                                  {
                                                                                                    statement: [
                                                                                                      {
                                                                                                        assignment: [
                                                                                                          {
                                                                                                            directlyAssignableExpression: [
                                                                                                              {
                                                                                                                simpleIdentifier: [
                                                                                                                  'id'
                                                                                                                ]
                                                                                                              }
                                                                                                            ]
                                                                                                          },
                                                                                                          '=',
                                                                                                          {
                                                                                                            expression: [
                                                                                                              {
                                                                                                                disjunction: [
                                                                                                                  {
                                                                                                                    conjunction: [
                                                                                                                      {
                                                                                                                        equality: [
                                                                                                                          {
                                                                                                                            comparison: [
                                                                                                                              {
                                                                                                                                infixOperation: [
                                                                                                                                  {
                                                                                                                                    elvisExpression: [
                                                                                                                                      {
                                                                                                                                        infixFunctionCall: [
                                                                                                                                          {
                                                                                                                                            rangeExpression: [
                                                                                                                                              {
                                                                                                                                                additiveExpression: [
                                                                                                                                                  {
                                                                                                                                                    multiplicativeExpression: [
                                                                                                                                                      {
                                                                                                                                                        asExpression: [
                                                                                                                                                          {
                                                                                                                                                            prefixUnaryExpression: [
                                                                                                                                                              {
                                                                                                                                                                postfixUnaryExpression: [
                                                                                                                                                                  {
                                                                                                                                                                    primaryExpression: [
                                                                                                                                                                      {
                                                                                                                                                                        literalConstant: [
                                                                                                                                                                          '1'
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
                                                                                                  },
                                                                                                  {
                                                                                                    statement: [
                                                                                                      {
                                                                                                        assignment: [
                                                                                                          {
                                                                                                            directlyAssignableExpression: [
                                                                                                              {
                                                                                                                simpleIdentifier: [
                                                                                                                  'v'
                                                                                                                ]
                                                                                                              }
                                                                                                            ]
                                                                                                          },
                                                                                                          '=',
                                                                                                          {
                                                                                                            expression: [
                                                                                                              {
                                                                                                                disjunction: [
                                                                                                                  {
                                                                                                                    conjunction: [
                                                                                                                      {
                                                                                                                        equality: [
                                                                                                                          {
                                                                                                                            comparison: [
                                                                                                                              {
                                                                                                                                infixOperation: [
                                                                                                                                  {
                                                                                                                                    elvisExpression: [
                                                                                                                                      {
                                                                                                                                        infixFunctionCall: [
                                                                                                                                          {
                                                                                                                                            rangeExpression: [
                                                                                                                                              {
                                                                                                                                                additiveExpression: [
                                                                                                                                                  {
                                                                                                                                                    multiplicativeExpression: [
                                                                                                                                                      {
                                                                                                                                                        asExpression: [
                                                                                                                                                          {
                                                                                                                                                            prefixUnaryExpression: [
                                                                                                                                                              {
                                                                                                                                                                postfixUnaryExpression: [
                                                                                                                                                                  {
                                                                                                                                                                    primaryExpression: [
                                                                                                                                                                      {
                                                                                                                                                                        literalConstant: [
                                                                                                                                                                          '1'
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
                                                                                                  },
                                                                                                  {
                                                                                                    semis: [
                                                                                                      ''
                                                                                                    ]
                                                                                                  }
                                                                                                ]
                                                                                              },
                                                                                              '}'
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
                    ]
                  },
                  ',',
                  {
                    valueArgument: [
                      {
                        expression: [
                          {
                            disjunction: [
                              {
                                conjunction: [
                                  {
                                    equality: [
                                      {
                                        comparison: [
                                          {
                                            infixOperation: [
                                              {
                                                elvisExpression: [
                                                  {
                                                    infixFunctionCall: [
                                                      {
                                                        rangeExpression: [
                                                          {
                                                            additiveExpression: [
                                                              {
                                                                multiplicativeExpression: [
                                                                  {
                                                                    asExpression: [
                                                                      {
                                                                        prefixUnaryExpression: [
                                                                          {
                                                                            postfixUnaryExpression: [
                                                                              {
                                                                                primaryExpression: [
                                                                                  {
                                                                                    simpleIdentifier: [
                                                                                      'Request'
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              },
                                                                              {
                                                                                postfixUnarySuffix: [
                                                                                  {
                                                                                    callSuffix: [
                                                                                      {
                                                                                        valueArguments: [
                                                                                          '(',
                                                                                          ')'
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              },
                                                                              {
                                                                                postfixUnarySuffix: [
                                                                                  {
                                                                                    navigationSuffix: [
                                                                                      {
                                                                                        memberAccessOperator: [
                                                                                          '.'
                                                                                        ]
                                                                                      },
                                                                                      {
                                                                                        simpleIdentifier: [
                                                                                          'apply'
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              },
                                                                              {
                                                                                postfixUnarySuffix: [
                                                                                  {
                                                                                    callSuffix: [
                                                                                      {
                                                                                        annotatedLambda: [
                                                                                          {
                                                                                            lambdaLiteral: [
                                                                                              '{',
                                                                                              {
                                                                                                statements: [
                                                                                                  {
                                                                                                    statement: [
                                                                                                      {
                                                                                                        assignment: [
                                                                                                          {
                                                                                                            directlyAssignableExpression: [
                                                                                                              {
                                                                                                                simpleIdentifier: [
                                                                                                                  'id'
                                                                                                                ]
                                                                                                              }
                                                                                                            ]
                                                                                                          },
                                                                                                          '=',
                                                                                                          {
                                                                                                            expression: [
                                                                                                              {
                                                                                                                disjunction: [
                                                                                                                  {
                                                                                                                    conjunction: [
                                                                                                                      {
                                                                                                                        equality: [
                                                                                                                          {
                                                                                                                            comparison: [
                                                                                                                              {
                                                                                                                                infixOperation: [
                                                                                                                                  {
                                                                                                                                    elvisExpression: [
                                                                                                                                      {
                                                                                                                                        infixFunctionCall: [
                                                                                                                                          {
                                                                                                                                            rangeExpression: [
                                                                                                                                              {
                                                                                                                                                additiveExpression: [
                                                                                                                                                  {
                                                                                                                                                    multiplicativeExpression: [
                                                                                                                                                      {
                                                                                                                                                        asExpression: [
                                                                                                                                                          {
                                                                                                                                                            prefixUnaryExpression: [
                                                                                                                                                              {
                                                                                                                                                                postfixUnaryExpression: [
                                                                                                                                                                  {
                                                                                                                                                                    primaryExpression: [
                                                                                                                                                                      {
                                                                                                                                                                        literalConstant: [
                                                                                                                                                                          '2'
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
                                                                                                  },
                                                                                                  {
                                                                                                    statement: [
                                                                                                      {
                                                                                                        assignment: [
                                                                                                          {
                                                                                                            directlyAssignableExpression: [
                                                                                                              {
                                                                                                                simpleIdentifier: [
                                                                                                                  'v'
                                                                                                                ]
                                                                                                              }
                                                                                                            ]
                                                                                                          },
                                                                                                          '=',
                                                                                                          {
                                                                                                            expression: [
                                                                                                              {
                                                                                                                disjunction: [
                                                                                                                  {
                                                                                                                    conjunction: [
                                                                                                                      {
                                                                                                                        equality: [
                                                                                                                          {
                                                                                                                            comparison: [
                                                                                                                              {
                                                                                                                                infixOperation: [
                                                                                                                                  {
                                                                                                                                    elvisExpression: [
                                                                                                                                      {
                                                                                                                                        infixFunctionCall: [
                                                                                                                                          {
                                                                                                                                            rangeExpression: [
                                                                                                                                              {
                                                                                                                                                additiveExpression: [
                                                                                                                                                  {
                                                                                                                                                    multiplicativeExpression: [
                                                                                                                                                      {
                                                                                                                                                        asExpression: [
                                                                                                                                                          {
                                                                                                                                                            prefixUnaryExpression: [
                                                                                                                                                              {
                                                                                                                                                                postfixUnaryExpression: [
                                                                                                                                                                  {
                                                                                                                                                                    primaryExpression: [
                                                                                                                                                                      {
                                                                                                                                                                        literalConstant: [
                                                                                                                                                                          '2'
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
                                                                                                  },
                                                                                                  {
                                                                                                    semis: [
                                                                                                      ''
                                                                                                    ]
                                                                                                  }
                                                                                                ]
                                                                                              },
                                                                                              '}'
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
                    ]
                  },
                  ',',
                  ')'
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, [
    "listOf(",
    "  Request().apply {",
    "    id = 1",
    "    v = 1",
    "  },",
    "  Request().apply {",
    "    id = 2",
    "    v = 2",
    "  },",
    ")"
  ]);
});

Deno.test('valueArguments/multilineList', () => {
  const tree: string[] = [];
  const input = {
    postfixUnaryExpression: [
      {
        primaryExpression: [
          {
            simpleIdentifier: [
              'listOf'
            ]
          }
        ]
      },
      {
        postfixUnarySuffix: [
          {
            callSuffix: [
              {
                valueArguments: [
                  '(',
                  {
                    valueArgument: [
                      {
                        expression: [
                          {
                            disjunction: [
                              {
                                conjunction: [
                                  {
                                    equality: [
                                      {
                                        comparison: [
                                          {
                                            infixOperation: [
                                              {
                                                elvisExpression: [
                                                  {
                                                    infixFunctionCall: [
                                                      {
                                                        rangeExpression: [
                                                          {
                                                            additiveExpression: [
                                                              {
                                                                multiplicativeExpression: [
                                                                  {
                                                                    asExpression: [
                                                                      {
                                                                        prefixUnaryExpression: [
                                                                          {
                                                                            postfixUnaryExpression: [
                                                                              {
                                                                                primaryExpression: [
                                                                                  {
                                                                                    simpleIdentifier: [
                                                                                      'Request'
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              },
                                                                              {
                                                                                postfixUnarySuffix: [
                                                                                  {
                                                                                    callSuffix: [
                                                                                      {
                                                                                        valueArguments: [
                                                                                          '(',
                                                                                          ')'
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
                  },
                  ',',
                  {
                    valueArgument: [
                      {
                        expression: [
                          {
                            disjunction: [
                              {
                                conjunction: [
                                  {
                                    equality: [
                                      {
                                        comparison: [
                                          {
                                            infixOperation: [
                                              {
                                                elvisExpression: [
                                                  {
                                                    infixFunctionCall: [
                                                      {
                                                        rangeExpression: [
                                                          {
                                                            additiveExpression: [
                                                              {
                                                                multiplicativeExpression: [
                                                                  {
                                                                    asExpression: [
                                                                      {
                                                                        prefixUnaryExpression: [
                                                                          {
                                                                            postfixUnaryExpression: [
                                                                              {
                                                                                primaryExpression: [
                                                                                  {
                                                                                    simpleIdentifier: [
                                                                                      'Request'
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              },
                                                                              {
                                                                                postfixUnarySuffix: [
                                                                                  {
                                                                                    callSuffix: [
                                                                                      {
                                                                                        valueArguments: [
                                                                                          '(',
                                                                                          ')'
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
                  },
                  ')'
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, [
    "listOf(Request(),Request())"
  ]);
});