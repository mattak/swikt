import {KotlinPrinter} from "../../../src/printer/KotlinPrinter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const printer = new KotlinPrinter();

Deno.test("KotlinPrinter/propertyDeclaration/without expression", () => {
  const tree: string[] = [];
  const input = {
    propertyDeclaration: [
      'var',
      {
        variableDeclaration: [
          {
            simpleIdentifier: ['a']
          },
          ':',
          {
            type_: [
              {
                typeReference: [
                  {
                    userType: [
                      {
                        simpleUserType: [
                          {
                            simpleIdentifier: [
                              'String'
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
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, ["var a: String"]);
});
