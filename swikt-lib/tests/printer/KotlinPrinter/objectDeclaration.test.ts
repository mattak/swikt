import {KotlinPrinter} from "../../../src/printer/KotlinPrinter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const printer = new KotlinPrinter();

Deno.test("KotlinPrinter/objectDeclaration", () => {
  const tree: string[] = [];
  const input = {
    objectDeclaration: [
      'object',
      {simpleIdentifier: ['Hoge']},
      {
        classBody: [
          '{',
          {
            classMemberDeclarations: null
          },
          '}'
        ]
      }
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, ["object Hoge {", '}']);
});

Deno.test('KotlinPrinter/objectDeclaration2', () => {
  const tree: string[] = [];
  const input = {
    topLevelObject: [
      {
        declaration: [
          {
            objectDeclaration: [
              'object',
              {simpleIdentifier: ['Hoge']},
              {classBody: ['{', '}']}
            ]
          }
        ]
      }
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, ["object Hoge {", '}']);

});

Deno.test("classBody", () => {
  const tree: string[] = [];
  const input = {
    classBody: [
      '{',
      {
        classMemberDeclarations: [
          {
            classMemberDeclaration: [
              {
                declaration: [
                  {
                    propertyDeclaration: [
                      {
                        modifiers: [
                          {
                            modifier: [
                              {
                                propertyModifier: ['const']
                              }
                            ]
                          }
                        ]
                      },
                      'val',
                      {
                        variableDeclaration: [
                          {simpleIdentifier: ['KEY']}
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
                                                                                    stringLiteral: [
                                                                                      {
                                                                                        lineStringLiteral: [
                                                                                          '"',
                                                                                          {
                                                                                            lineStringContent: [
                                                                                              'VALUE'
                                                                                            ]
                                                                                          },
                                                                                          '"'
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              }
                                                                            ]
                                                                          }
                                                                        ]
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
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
                  }
                ]
              }
            ]
          }
        ]
      },
      '}'
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, ['{', '  const val KEY = \"VALUE\"', '}']);
})

Deno.test("KotlinPrinter/classMemberDeclarations", () => {
  const tree: string[] = [];
  const input = {
    classMemberDeclarations: [
      {
        classMemberDeclaration: [
          {
            declaration: [
              {
                propertyDeclaration: [
                  {
                    modifiers: [
                      {
                        modifier: [
                          {
                            propertyModifier: ['const']
                          }
                        ]
                      }
                    ]
                  },
                  'val',
                  {
                    variableDeclaration: [
                      {
                        simpleIdentifier: ['KEY']
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
                                                                                stringLiteral: [
                                                                                  {
                                                                                    lineStringLiteral: [
                                                                                      '"',
                                                                                      {
                                                                                        lineStringContent: [
                                                                                          'VALUE'
                                                                                        ]
                                                                                      },
                                                                                      '"'
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              }
                                                                            ]
                                                                          }
                                                                        ]
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
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
              }
            ]
          }
        ]
      }
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, ["const val KEY = \"VALUE\""]);
});

