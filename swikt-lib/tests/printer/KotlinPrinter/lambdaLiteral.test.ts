import {KotlinPrinter} from "../../../src/printer/KotlinPrinter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const printer = new KotlinPrinter();

Deno.test('lambdaLiteral/with arrow', () => {
  const input = {
    postfixUnaryExpression: [
      {
        primaryExpression: [
          {
            simpleIdentifier: [
              'emptyList'
            ]
          }
        ]
      },
      {
        postfixUnarySuffix: [
          {
            typeArguments: [
              '<',
              {
                typeProjection: [
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
              '>'
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
                  'map'
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
                        lambdaParameters: [
                          {
                            lambdaParameter: [
                              {
                                variableDeclaration: [
                                  {
                                    simpleIdentifier: [
                                      'tag'
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      '->',
                      {
                        statements: []
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
  const keys: string[] = [];
  const output = printer.print(keys, input);
  assertEquals(output, ['emptyList<String>().map { tag ->', '}']);
});
