import { TArray } from "../../../../src/util/Tree.ts";
import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { SwiftKotlinConverter } from "../../../../src/converter/SwiftKotlinConverter.ts";
import { convert_postfixExpression__expression } from "../../../../src/converter/expressions/postfixExpression.ts";

const converter = new SwiftKotlinConverter();

Deno.test("convert_postfixExpression__expression", () => {
  const input: TArray = [
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
  ];
  const output = convert_postfixExpression__expression(
    converter,
    [],
    input,
  );
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
