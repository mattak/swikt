import {convert_pattern__variableDeclaration} from "../../../../src/converter/patterns/pattern.ts";
import {TArray} from "../../../../src/util/Tree.ts";
import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const converter = new SwiftKotlinConverter();

Deno.test('convert_pattern__variableDeclaration/without_type', () => {
  const input: TArray = [
    {
      "identifier_pattern": [
        {
          "identifier": [
            "a"
          ]
        }
      ]
    },
  ];
  const output = convert_pattern__variableDeclaration(converter, [], input);
  assertEquals(output, {
    "variableDeclaration": [
      {
        "simpleIdentifier": [
          "a"
        ]
      },
    ]
  });
});

Deno.test('convert_pattern__variableDeclaration/with_type', () => {
  const input: TArray = [
    {
      "identifier_pattern": [
        {
          "identifier": [
            "a"
          ]
        }
      ]
    },
    {
      "type_annotation": [
        ":",
        {
          "type": [
            {
              "protocol_composition_type": [
                {
                  "type_identifier": [
                    {
                      "type_name": [
                        {
                          "identifier": [
                            "Int"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  const output = convert_pattern__variableDeclaration(converter, [], input);
  assertEquals(output, {
    "variableDeclaration": [
      {
        "simpleIdentifier": [
          "a"
        ]
      },
      ":",
      {
        "type_": [
          {
            "typeReference": [
              {
                "userType": [
                  {
                    "simpleUserType": [
                      {
                        "simpleIdentifier": [
                          "Int"
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  });
})