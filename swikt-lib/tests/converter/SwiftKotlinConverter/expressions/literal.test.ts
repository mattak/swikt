import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {TArray} from "../../../../src/util/Tree.ts";
import {
  convert_literal__primaryExpression,
  convert_numericLiteral__primaryExpression, convert_stringLiteral__primaryExpression
} from "../../../../src/converter/expressions/literal.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const converter = new SwiftKotlinConverter();

Deno.test('convert_literal__primaryExpression/nil', () => {
  const input: TArray = [
    {
      "nil_literal": [
        "nil"
      ]
    }
  ];
  const output = convert_literal__primaryExpression(converter, [], input);
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

Deno.test('convert_literal__primaryExpression/numeric', () => {
  const input: TArray = [
    {
      "numeric_literal": [
        "5.0"
      ]
    }
  ];
  const output = convert_literal__primaryExpression(converter, [], input);
  assertEquals(output, {
    "primaryExpression": [
      {
        "literalConstant": [
          "5.0"
        ]
      }
    ]
  });
});

Deno.test('convert_literal__primaryExpression/boolean', () => {
  const input: TArray = [
    {
      "boolean_literal": [
        "false"
      ]
    }
  ];
  const output = convert_literal__primaryExpression(converter, [], input);
  assertEquals(output, {
    "primaryExpression": [
      {
        "literalConstant": [
          "false"
        ]
      }
    ]
  });
});

Deno.test('convert_literal__primaryExpression/string', () => {
  const input: TArray = [
    {
      "string_literal": [
        {
          "interpolated_string_literal": [
            "\"",
            "message",
            "\""
          ]
        }
      ]
    }
  ];
  const output = convert_literal__primaryExpression(converter, [], input);
  assertEquals(output, {
    "primaryExpression": [
      {
        "stringLiteral": [
          {
            "lineStringLiteral": [
              "\"",
              {
                "lineStringContent": [
                  "message"
                ]
              },
              "\""
            ]
          }
        ]
      }
    ]
  });
});

Deno.test('convert_numericLiteral__primaryExpression/integer', () => {
  const input: TArray = [
    {
      "integer_literal": [
        "5"
      ]
    }
  ];
  const output = convert_numericLiteral__primaryExpression(converter, [], input);
  assertEquals(output, {
    "primaryExpression": [
      {
        "literalConstant": [
          "5"
        ]
      }
    ]
  });
});

Deno.test('convert_numericLiteral__primaryExpression/float', () => {
  const input: TArray = [
    "1.5"
  ];
  const output = convert_numericLiteral__primaryExpression(converter, [], input);
  assertEquals(output, {
    "primaryExpression": [
      {
        "literalConstant": [
          "1.5"
        ]
      }
    ]
  });
});

Deno.test('convert_stringLiteral__primaryExpression', () => {
  const input: TArray = [
    {
      "interpolated_string_literal": [
        "\"",
        "message",
        "\""
      ]
    }
  ];
  const output = convert_stringLiteral__primaryExpression(converter, [], input);
  assertEquals(output, {
    "primaryExpression": [
      {
        "stringLiteral": [
          {
            "lineStringLiteral": [
              "\"",
              {
                "lineStringContent": [
                  "message"
                ]
              },
              "\""
            ]
          }
        ]
      }
    ]
  });
});