import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {TArray} from "../../../../src/util/Tree.ts";
import {
  convert_functionSignature__functionValueParameter
} from "../../../../src/converter/declarations/functionDeclaration.ts";

const converter = new SwiftKotlinConverter();

Deno.test('convert_functionDeclaration__functionDeclaration/simpleFunction', () => {
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
  const output = converter.convert_functionDeclaration__functionDeclaration(converter, [], input);
  assertEquals(output, {
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
  });
});

Deno.test('convert_functionSignature__functionValueParameter/empty', () => {
  const input: TArray = [
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
  ];
  const output = convert_functionSignature__functionValueParameter(converter, [], input);
  assertEquals(output, {
    "functionValueParameters": [
      "(",
      ")"
    ]
  });
});

