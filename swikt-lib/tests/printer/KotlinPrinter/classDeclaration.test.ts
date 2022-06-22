import {KotlinPrinter} from "../../../src/printer/KotlinPrinter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const printer = new KotlinPrinter();

Deno.test("KotlinPrinter/declaration/classDeclaration", () => {
  const tree: string[] = [];
  const input = {
    declaration: [
      {
        classDeclaration: [
          'class',
          {simpleIdentifier: ['Hoge']},
          {
            primaryConstructor: [{classParameters: ['(', ')']}]
          },
          {
            classBody: ['{', {classMemberDeclarations: null}, '}']
          }
        ]
      }
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, ["class Hoge() {", '}']);
});

Deno.test("KotlinPrinter/declaration/primaryConstructor", () => {
  const tree: string[] = [];
  const input = {
    primaryConstructor: [
      {
        classParameters: [
          '(',
          {
            classParameter: [
              {
                modifiers: [
                  {
                    modifier: [
                      {
                        visibilityModifier: ['private']
                      }
                    ]
                  }
                ]
              },
              'val',
              {simpleIdentifier: ['a']},
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
                                simpleIdentifier: ['Int']
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
          ',',
          {
            classParameter: [
              {
                modifiers: [
                  {
                    modifier: [
                      {
                        visibilityModifier: ['private']
                      }
                    ]
                  }
                ]
              },
              'var',
              {simpleIdentifier: ['b']},
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
                                simpleIdentifier: ['String']
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
          ')'
        ]
      }
    ]
  }

  const output = printer.print(tree, input);
  assertEquals(output, ["(private val a: Int, private var b: String)"]);
});

Deno.test("KotlinPrinter/declaration/classMemberDeclarations", () => {
  const tree: string[] = [];
  const input = {
    classMemberDeclarations: [
      {
        classMemberDeclaration: [
          {
            declaration: [
              {
                functionDeclaration: [
                  'fun',
                  {simpleIdentifier: ['call']},
                  {
                    functionValueParameters: ['(', ')']
                  },
                  {
                    functionBody: [
                      {
                        block: [
                          '{',
                          {statements: null},
                          '}'
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
      {semis: ['']}
    ]
  };

  const output = printer.print(tree, input);
  assertEquals(output, ["fun call() {", "}"]);
});
