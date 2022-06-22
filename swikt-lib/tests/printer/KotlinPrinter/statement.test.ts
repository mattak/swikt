import {KotlinPrinter} from "../../../src/printer/KotlinPrinter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const parser = new KotlinPrinter();

Deno.test('statement', () => {
  const input = {
    statement: [
      {
        assignment: [
          {
            directlyAssignableExpression: [
              {
                simpleIdentifier: [
                  'list'
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
                                                                        simpleIdentifier: [
                                                                          'emptyList'
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
      }
    ]
  };
  const tree: string[] = [];
  const output = parser.print(tree, input);
  assertEquals(output, ["list = emptyList()"]);
});