import {TObject} from "../../util/Tree.ts";
import {createSimpleIdentifier} from "./identifier.ts";

const __typeConvertTable: { [key: string]: string } = {
  "Bool": "Boolean",
};

export function createPlainUserType(name: string): TObject {
  const convertedName = __typeConvertTable[name] ?? name;
  return {
    "type_": [
      {
        "typeReference": [
          {
            "userType": [
              {
                "simpleUserType": [
                  createSimpleIdentifier(convertedName),
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