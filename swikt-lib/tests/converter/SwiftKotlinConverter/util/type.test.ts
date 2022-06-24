import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {createGenericUserType, createPlainUserType} from "../../../../src/converter/util/type.ts";

Deno.test('createPlainUserType', () => {
  assertEquals(createPlainUserType('String'), {
    "type_": [
      {
        "typeReference": [
          {
            "userType": [
              {
                "simpleUserType": [
                  {
                    "simpleIdentifier": [
                      "String",
                    ],
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  });

  assertEquals(createPlainUserType('Bool'), {
    "type_": [
      {
        "typeReference": [
          {
            "userType": [
              {
                "simpleUserType": [
                  {
                    "simpleIdentifier": [
                      "Boolean",
                    ],
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

Deno.test('createGenericUserType', () => {
  assertEquals(createGenericUserType('Single', createPlainUserType('Int'), createPlainUserType('Boolean')), {
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
  });
});
