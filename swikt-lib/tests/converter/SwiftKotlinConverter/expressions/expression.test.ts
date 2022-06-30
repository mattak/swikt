import { TArray } from "../../../../src/util/Tree.ts";
import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { convert_expression__expression } from "../../../../src/converter/expressions/expresssion.ts";
import { SwiftKotlinConverter } from "../../../../src/converter/SwiftKotlinConverter.ts";

const converter = new SwiftKotlinConverter();

Deno.test("convert_expression__expression", () => {
  const input: TArray = [
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
                                "2",
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
  ];
  const output = convert_expression__expression(converter, [], input);
  assertEquals(
    output,
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
                                                          "postfixUnaryExpression":
                                                            [
                                                              {
                                                                "primaryExpression":
                                                                  [
                                                                    {
                                                                      "literalConstant":
                                                                        [
                                                                          "2",
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
    },
  );
});
