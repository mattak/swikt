import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {TArray} from "../../../../src/util/Tree.ts";
import {
  convert_functionDeclaration__functionDeclaration,
  convert_functionResult__type,
  convert_parameterClause__functionValueParameters
} from "../../../../src/converter/declarations/functionDeclaration.ts";

const converter = new SwiftKotlinConverter();

Deno.test('convert_functionDeclaration__functionDeclaration/simpleFunction', () => {
  const input: TArray = [
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

Deno.test('convert_functionDeclaration__functionDeclaration/simpleResult', () => {
  const input: TArray = [
    {
      "function_head": [
        "func"
      ]
    },
    {
      "function_name": [
        {
          "identifier": [
            "a"
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
        },
        {
          "function_result": [
            {
              "arrow_operator": [
                "-",
                ">"
              ]
            },
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
            }
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
  ];
  const output = convert_functionDeclaration__functionDeclaration(converter, [], input);
  assertEquals(output, {
    "functionDeclaration": [
      "fun",
      {
        "simpleIdentifier": [
          "a"
        ]
      },
      {
        "functionValueParameters": [
          "(",
          ")"
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

Deno.test('convert_parameterClause__functionValueParameters/empty', () => {
  const input: TArray = [
    {
      "parameter_clause": [
        "(",
        ")"
      ]
    }
  ];
  const output = convert_parameterClause__functionValueParameters(converter, [], input);
  assertEquals(output, {
    "functionValueParameters": [
      "(",
      ")"
    ]
  });
});

Deno.test('convert_parameterClause__functionValueParameters/multipleParams', () => {
  const input: TArray = [
    "(",
    {
      "parameter_list": [
        {
          "parameter": [
            {
              "local_parameter_name": [
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
            }
          ]
        },
        ",",
        {
          "parameter": [
            {
              "local_parameter_name": [
                {
                  "identifier": [
                    "b"
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
          ]
        }
      ],
    },
    ")"
  ];
  const output = convert_parameterClause__functionValueParameters(converter, [], input);
  assertEquals(output, {
    "functionValueParameters": [
      "(",
      {
        "functionValueParameter": [
          {
            "parameter": [
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
          }
        ]
      },
      ",",
      {
        "functionValueParameter": [
          {
            "parameter": [
              {
                "simpleIdentifier": [
                  "b"
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
          }
        ]
      },
      ")"
    ]
  });
});

Deno.test('convert_functionResult__type', () => {
  const input: TArray = [
    {
      "arrow_operator": [
        "-",
        ">"
      ]
    },
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
    }
  ];

  const output = convert_functionResult__type(converter, [], input);
  assertEquals(output, {
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
  });
});