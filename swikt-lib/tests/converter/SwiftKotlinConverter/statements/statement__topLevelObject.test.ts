import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {TArray, TObject} from "../../../../src/util/Tree.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {convert_statement__topLevelObject} from "../../../../src/converter/statements/statements.ts";

const converter = new SwiftKotlinConverter();

Deno.test('convert_statement__topLevelObject/empty', () => {
  const input: TArray = [
    {
      declaration: [
        {
          struct_declaration: [
            'struct',
            {struct_name: [{identifier: ['Sample']}]},
            {struct_body: ['{', '}']},
          ]
        }
      ],
    }
  ];
  const result = convert_statement__topLevelObject(converter, [], input);
  assertEquals(result, {
    topLevelObject: [
      {
        declaration: [
          {
            objectDeclaration: [
              'object',
              {simpleIdentifier: ['Sample']},
              {
                classBody: [
                  '{',
                  '}',
                ]
              }
            ]
          }
        ]
      }
    ]
  });
});
