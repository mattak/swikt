import {SwiftKotlinConverter} from "../../../src/converter/SwiftKotlinConverter.ts";
import {TObject} from "../../../src/util/Tree.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const converter = new SwiftKotlinConverter();

Deno.test('statement/topLevelObject/empty', () => {
  const input: TObject = {
    statement: [
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
    ]
  };
  const result = converter.visitObject([], input);
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
