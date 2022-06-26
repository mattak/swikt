import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {TArray, TObject} from "../../../../src/util/Tree.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {convert___packageHeader, convert__importList} from "../../../../src/converter/declarations/topLevelDeclaration.ts";

const converter = new SwiftKotlinConverter();

Deno.test('convert___packageHeader', () => {
  converter.kotlinTable = {
    package: 'com.example.test'
  };
  const input: TArray = [];
  const output = convert___packageHeader(converter, [], input);
  assertEquals(output,
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
    });
});

Deno.test('convert__importList', () => {
  converter.kotlinTable = {
    package: 'com.example.test',
    importList: ['com.example.Test'],
  };
  const input: TArray = [
    {statements: []}
  ];

  const tree: string[] = [];
  const output = convert__importList(converter, tree, input);
  assertEquals(output, {
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
  });
});

Deno.test('top_level/overall', () => {
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
  const output = converter.convert(input);
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
