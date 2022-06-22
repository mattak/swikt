import {SwiftKotlinConverter} from "../../../src/converter/SwiftKotlinConverter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {TObject} from "../../../src/util/Tree.ts";

const converter = new SwiftKotlinConverter();

Deno.test('SwiftKotlinConverter.top_level/packageHeader', () => {
  converter.kotlinTable = {
    package: 'com.example.test'
  };
  const input = {
    top_level: []
  }
  const tree: string[] = [];
  const output = converter.visitObject(tree, input);
  assertEquals(output, {
    kotlinFile: [
      {
        packageHeader: [
          'package',
          {
            "identifier": [
              {
                "simpleIdentifier": [
                  "com",
                ],
              },
              ".",
              {
                "simpleIdentifier": [
                  "example",
                ],
              },
              ".",
              {
                "simpleIdentifier": [
                  "test",
                ],
              },
            ],
          },
        ]
      }
    ]
  });
});

Deno.test('SwiftKotlinConverter.top_level/imports', () => {
  converter.kotlinTable = {
    package: 'com.example.test',
    importList: ['com.example.Test'],
  };
  const input = {
    top_level: [
      {statements: []}
    ]
  }
  const tree: string[] = [];
  const output = converter.visitObject(tree, input);
  assertEquals(output, {
    kotlinFile: [
      {
        packageHeader: [
          'package',
          {
            "identifier": [
              {
                "simpleIdentifier": [
                  "com",
                ],
              },
              ".",
              {
                "simpleIdentifier": [
                  "example",
                ],
              },
              ".",
              {
                "simpleIdentifier": [
                  "test",
                ],
              },
            ],
          },
        ],
      },
      {
        importList: [
          {
            importHeader: [
              'import',
              {
                identifier: [
                  {simpleIdentifier: ['com']},
                  '.',
                  {simpleIdentifier: ['example']},
                  '.',
                  {simpleIdentifier: ['Test']},
                ]
              },
            ]
          },
        ],
      }
    ]
  });
});

Deno.test('SwiftKotlinConverter.top_level/overall', () => {
  converter.kotlinTable = {
    package: 'com.example.test',
    importList: ['io.reactivex.Single'],
  };
  const input: TObject = {
    top_level: [
      {
        statements: [
          {
            statement: [
              {
                declaration: [
                  {
                    import_declaration: [
                      'import',
                      {
                        import_path: [
                          {
                            import_path_identifier: [{identifier: ['Foundation']}]
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
            statement: [
              {
                declaration: [
                  {
                    struct_declaration: [
                      'struct',
                      {
                        struct_name: [{identifier: ['Query']}]
                      },
                      {
                        struct_body: [
                          '{',
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
      '<EOF>'
    ]
  };
  const tree: string[] = [];
  const output = converter.visitObject(tree, input);
  assertEquals(output, {
    kotlinFile: [
      {
        packageHeader: [
          'package',
          {
            identifier: [
              {simpleIdentifier: ['com']},
              '.',
              {simpleIdentifier: ['example']},
              '.',
              {simpleIdentifier: ['test']}
            ]
          }
        ]
      },
      {
        importList: [
          {
            importHeader: [
              'import',
              {
                identifier: [
                  {simpleIdentifier: ['io']},
                  '.',
                  {simpleIdentifier: ['reactivex']},
                  '.',
                  {simpleIdentifier: ['Single']}
                ]
              }
            ]
          }
        ]
      },
      {
        topLevelObject: [
          {
            declaration: [
              {
                objectDeclaration: [
                  'object',
                  {simpleIdentifier: ['Query']},
                  {classBody: ['{', '}']}
                ]
              }
            ]
          }
        ]
      }
    ]
  })
});
