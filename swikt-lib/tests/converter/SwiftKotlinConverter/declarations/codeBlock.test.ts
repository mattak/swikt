import {TArray, TObject} from "../../../../src/util/Tree.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {convert_codeBlock__block} from "../../../../src/converter/declarations/codeBlock.ts";
import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";

const converter = new SwiftKotlinConverter({
  statement(self: SwiftKotlinConverter, path: string[], input: TArray): TObject[] {
    return [
      { statement: [] }
    ]
  }
});

Deno.test('convert_codeBlock__block/empty', () => {
  const input: TArray = [
    "{",
    "}"
  ];
  const output = convert_codeBlock__block(converter, [], input);
  assertEquals(output, {
    "block": [
      "{",
      "}"
    ]
  });
});

Deno.test('convert_codeBlock__block/statements', () => {
  const input: TArray = [
    "{",
    {
      "statements": [
        {
          "statement": []
        }
      ]
    },
    "}"
  ];
  const output = convert_codeBlock__block(converter, [], input);
  assertEquals(output, {
    "block": [
      "{",
      {
        "statements": [
          {
            "statement": []
          }
        ]
      },
      "}"
    ]
  });
});
