import {TObject} from "../../util/Tree.ts";

export function createConstantExpression(value: string): TObject {
  return {
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
                                                                  value
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
}