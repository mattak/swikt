import {TObject} from "../../util/Tree.ts";
import {createSimpleIdentifier} from "./identifier.ts";
import {joinObjectsWithComma} from "./join.ts";

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

export function createGenericUserType(genericName: string, ...innerTypes: TObject[]): TObject {
  const typeProjectionsWithComma = joinObjectsWithComma(innerTypes.map(x => {
    return {
      "typeProjection": [
        x
      ]
    }
  }));
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
                      ...typeProjectionsWithComma,
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