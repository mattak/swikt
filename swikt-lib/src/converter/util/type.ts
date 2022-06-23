import {TObject} from "../../util/Tree.ts";
import {createSimpleIdentifier} from "./identifier.ts";

export function createPlainUserType(name: string): TObject {
  return {
    "type_": [
      {
        "typeReference": [
          {
            "userType": [
              {
                "simpleUserType": [
                  createSimpleIdentifier(name),
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}

export function createGenericUserType(genericName: string, innerType: TObject): TObject {
  return {
    "type_": [
      {
        "typeReference": [
          {
            "userType": [
              {
                "simpleUserType": [
                  {
                    "simpleIdentifier": [
                      genericName,
                    ]
                  },
                  {
                    "typeArguments": [
                      "<",
                      {
                        "typeProjection": [
                          innerType,
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
}