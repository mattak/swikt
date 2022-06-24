import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {createPlainUserType} from "../../../../src/converter/util/type.ts";

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