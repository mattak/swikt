import { TArray } from "../../../../src/util/Tree.ts";
import { SwiftKotlinConverter } from "../../../../src/converter/SwiftKotlinConverter.ts";
import { convert_primaryExpression__primaryExpression } from "../../../../src/converter/expressions/primaryExpression.ts";
import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";

const converter = new SwiftKotlinConverter();

Deno.test("convert_primaryExpression__primaryExpression/literal_expression", () => {
  const input: TArray = [
    {
      "literal_expression": [
        {
          "literal": [
            {
              "numeric_literal": [
                {
                  "integer_literal": [
                    "1",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const output = convert_primaryExpression__primaryExpression(
    converter,
    [],
    input,
  );
  assertEquals(output, {
    "primaryExpression": [
      {
        "literalConstant": [
          "1",
        ],
      },
    ],
  });
});
