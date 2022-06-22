import {KotlinPrinter} from "../../../src/printer/KotlinPrinter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const printer = new KotlinPrinter();

Deno.test('expression/callSuffix', () => {
  const tree: string[] = [];
  const input = {
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
                                                                                            postfixUnaryExpression: [
                                                                                              {
                                                                                                primaryExpression: [
                                                                                                  {
                                                                                                    thisExpression: [
                                                                                                      'this'
                                                                                                    ]
                                                                                                  }
                                                                                                ]
                                                                                              }
                                                                                            ]
                                                                                          },
                                                                                          {
                                                                                            assignableSuffix: [
                                                                                              {
                                                                                                navigationSuffix: [
                                                                                                  {
                                                                                                    memberAccessOperator: [
                                                                                                      '.'
                                                                                                    ]
                                                                                                  },
                                                                                                  {
                                                                                                    simpleIdentifier: [
                                                                                                      'a'
                                                                                                    ]
                                                                                                  }
                                                                                                ]
                                                                                              }
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
  };
  const output = printer.print(tree, input);
  assertEquals(output, ["Request().apply {", '  this.a = 1', '}']);
});