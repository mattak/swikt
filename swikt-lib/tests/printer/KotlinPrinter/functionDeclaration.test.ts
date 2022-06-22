import {KotlinPrinter} from "../../../src/printer/KotlinPrinter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const printer = new KotlinPrinter();

Deno.test("KotlinPrinter/functionDeclaration/body", () => {
  const tree: string[] = [];
  const input = {
    functionDeclaration: [
      'fun',
      {simpleIdentifier: ['call']},
      {functionValueParameters: ['(', ')']},
      {
        functionBody: [
          {
            block: [
              '{',
              {
                statements: [
                  {
                    statement: [
                      {
                        declaration: [
                          {
                            propertyDeclaration: [
                              'var',
                              {
                                variableDeclaration: [
                                  {
                                    simpleIdentifier: ['a']
                                  },
                                  ':',
                                  {
                                    type_: [
                                      {
                                        typeReference: [
                                          {
                                            userType: [
                                              {
                                                simpleUserType: [
                                                  {
                                                    simpleIdentifier: [
                                                      'String'
                                                    ]
                                                  }
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
                              ''
                            ]
                          }
                        ]
                      }
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
  };
  const output = printer.print(tree, input);
  assertEquals(output, ["fun call() {", "  var a: String", "}"]);
});

Deno.test('KotlinPrinter/expression', () => {
  const tree: string[] = [];
  const input = {
    functionDeclaration: [
      'fun',
      {simpleIdentifier: ['call']},
      {
        functionValueParameters: [
          '(',
          {
            functionValueParameter: [
              {
                parameter: [
                  {simpleIdentifier: ['arg']},
                  ':',
                  {
                    type_: [
                      {
                        typeReference: [
                          {
                            userType: [
                              {
                                simpleUserType: [
                                  {
                                    simpleIdentifier: ['String']
                                  }
                                ]
                              }
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
      },
      ':',
      {
        type_: [
          {
            typeReference: [
              {
                userType: [
                  {
                    simpleUserType: [{simpleIdentifier: ['Int']}]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        functionBody: [
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
  };
  const output = printer.print(tree, input);
  assertEquals(output, ['fun call(arg: String): Int = 1'])
});
