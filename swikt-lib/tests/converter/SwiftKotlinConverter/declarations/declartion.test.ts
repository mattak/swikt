import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {TArray} from "../../../../src/util/Tree.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const converter = new SwiftKotlinConverter();

Deno.test('SwiftConverter.convert_declaration__declaration/default', () => {
  const input: TArray = [];
  const output = converter.convert_declaration__declaration(converter, [], input);
  assertEquals(output, {});
});

Deno.test('SwiftConverter.convert_declaration__declaration/function_declaration', () => {
  const input: TArray = [
    {
      "function_declaration": [
        {
          "function_head": [
            "func"
          ]
        },
        {
          "function_name": [
            {
              "identifier": [
                "build"
              ]
            }
          ]
        },
        {
          "function_signature": [
            {
              "parameter_clause": [
                "(",
                ")"
              ]
            }
          ]
        },
        {
          "function_body": [
            {
              "code_block": [
                "{",
                "}"
              ]
            }
          ]
        }
      ]
    }
  ];
  const output = converter.convert_declaration__declaration(converter, ['declaration'], input);
  assertEquals(output, {
    "declaration": [
      {
        "functionDeclaration": [
          "fun",
          {
            "simpleIdentifier": [
              "build"
            ]
          },
          {
            "functionValueParameters": [
              "(",
              ")"
            ]
          },
          {
            "functionBody": [
              {
                "block": [
                  "{",
                  "",
                  {
                    "statements": []
                  },
                  "}"
                ]
              }
            ]
          }
        ]
      }
    ]
  });
});

Deno.test('SwiftConverter.convert_declaration__declaration/struct_declaration', () => {
  const input: TArray = [
    {
      "struct_declaration": [
        "struct",
        {
          "struct_name": [
            {
              "identifier": [
                "Hoge"
              ]
            }
          ]
        },
        {
          "struct_body": [
            "{",
            {
              "struct_members": []
            },
            "}"
          ]
        }
      ]
    }
  ];
  const output = converter.convert_declaration__declaration(converter, ['declaration'], input);
  assertEquals(output, {
    "declaration": [
      {
        "objectDeclaration": [
          "object",
          {
            "simpleIdentifier": [
              "Hoge"
            ]
          },
          {
            "classBody": [
              "{",
              {
                "classMemberDeclarations": []
              },
              "}"
            ]
          }
        ]
      }
    ]
  });
});
