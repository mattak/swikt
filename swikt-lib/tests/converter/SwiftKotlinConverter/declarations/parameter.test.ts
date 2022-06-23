import {convert_parameter_parameter} from "../../../../src/converter/declarations/parameter.ts";
import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {TArray} from "../../../../src/util/Tree.ts";

const converter = new SwiftKotlinConverter();

Deno.test('convert_parameter_parameter', () => {
  const input: TArray = [
    {
      "local_parameter_name": [
        {
          "identifier": [
            "args"
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
              "array_type": [
                "[",
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
                                    "String"
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "]"
              ]
            }
          ]
        }
      ]
    }
  ];

  const output = convert_parameter_parameter(converter, [], input);
  assertEquals(output, {
    "parameter": [
      {
        "simpleIdentifier": [
          "args"
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
                          "List"
                        ]
                      },
                      {
                        "typeArguments": [
                          "<",
                          {
                            "typeProjection": [
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
                                                  "String"
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
                          },
                          ">"
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
  })
});