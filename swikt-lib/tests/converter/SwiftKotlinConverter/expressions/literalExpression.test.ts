import {TArray} from "../../../../src/util/Tree.ts";
import {convert_literalExpression__primaryExpression} from "../../../../src/converter/expressions/literalExpression.ts";
import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const converter = new SwiftKotlinConverter();

Deno.test('convert_literalExpression__primaryExpression', () => {
  const input: TArray = [
    {
      "literal": [
        {
          "nil_literal": [
            "nil"
          ]
        }
      ]
    }
  ];
  const output = convert_literalExpression__primaryExpression(converter, [], input);
  assertEquals(output, {
    "primaryExpression": [
      {
        "literalConstant": [
          "null"
        ]
      }
    ]
  });
});