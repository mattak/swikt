import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {convert_statements__statements} from "../../../../src/converter/statements/statements.ts";
import {TArray, TObject} from "../../../../src/util/Tree.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const converter = new SwiftKotlinConverter({
  statement(self: SwiftKotlinConverter, path: string[], input: TArray): TObject[] {
    return [
      {statement: []},
      {statement: []},
    ];
  }
});

Deno.test('convert_statements__statements/empty', () => {
  const input: TArray = [];
  const output = convert_statements__statements(converter, [], input);
  assertEquals(output, {
    "statements": []
  });
});

Deno.test('convert_statements__statements/multiple', () => {
  const input: TArray = [
    {
      "statement": [
        {}
      ]
    }
  ];
  const output = convert_statements__statements(converter, [], input);
  assertEquals(output, {
    "statements": [
      {
        "statement": []
      },
      {
        "statement": []
      },
    ]
  });
});
