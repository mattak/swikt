import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {TArray, TObject} from "../../../../src/util/Tree.ts";
import {
  convert_arrayType__type_,
  convert_protocolCompositionType__type_,
  convert_type__type_
} from "../../../../src/converter/types/type.ts";
import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";

const converter = new SwiftKotlinConverter();
const expectResultPlainType: TObject = {
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
};
const expectResultArrayType: TObject = {
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
};
const expectResultGenericType2: TObject = {
  "type_": [
    {
      "typeReference": [
        {
          "userType": [
            {
              "simpleUserType": [
                {
                  "simpleIdentifier": [
                    "Single"
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
                    ",",
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
                                            "Boolean"
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
};

const inputPlainType: TArray = [
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
];
const inputArrayType = [
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
];
const inputGenericType2: TArray = [
  {
    "type_identifier": [
      {
        "type_name": [
          {
            "identifier": [
              "Single"
            ]
          }
        ]
      },
      {
        "generic_argument_clause": [
          "<",
          {
            "generic_argument_list": [
              {
                "generic_argument": [
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
              },
              ",",
              {
                "generic_argument": [
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
                                      "Bool"
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
          ">"
        ]
      }
    ]
  }
];

Deno.test('convert_protocolCompositionType__type_/plain', () => {
  const input: TArray = inputPlainType;
  const output = convert_protocolCompositionType__type_(converter, [], input);
  assertEquals(output, expectResultPlainType);
});

Deno.test('convert_protocolCompositionType__type_/generic2', () => {
  const input: TArray = inputGenericType2;
  const output = convert_protocolCompositionType__type_(converter, [], input);
  assertEquals(output, expectResultGenericType2);
});

Deno.test('convert_arrayType__type_', () => {
  const input: TArray = inputArrayType;
  const output = convert_arrayType__type_(converter, [], input);
  assertEquals(output, expectResultArrayType);
});

Deno.test('convert_type__type_/plain', () => {
  const input: TArray = [
    {
      "protocol_composition_type": inputPlainType
    }
  ];
  const output = convert_type__type_(converter, [], input);
  assertEquals(output, expectResultPlainType);
});

Deno.test('convert_type__type_/array', () => {
  const input: TArray = [
    {
      "array_type": inputArrayType
    }
  ];
  const output = convert_type__type_(converter, [], input);
  assertEquals(output, expectResultArrayType);
});
