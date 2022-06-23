import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {TObject} from "../../../../src/util/Tree.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const converter = new SwiftKotlinConverter();

Deno.test('convert_struct_declaration__objectDeclaration/empty', () => {
  const input: TObject = {
    struct_declaration: [
      'struct',
      {
        struct_name: [{identifier: ['Sample']}]
      },
      {
        struct_body: [
          '{',
          '}'
        ]
      }
    ]
  };
  const result: TObject = converter.visitObject([], input);
  assertEquals(result, {
    objectDeclaration: [
      'object',
      {simpleIdentifier: ['Sample']},
      {
        classBody: [
          '{',
          '}'
        ]
      }
    ]
  });
});

Deno.test('convert_struct_declaration__objectDeclaration/struct member', () => {
  const input: TObject = {
    struct_declaration: [
      'struct',
      {
        struct_name: [{identifier: ['Sample']}]
      },
      {
        struct_body: [
          '{',
          {
            struct_members: []
          },
          '}'
        ]
      }
    ]
  };
  const result: TObject = converter.visitObject([], input);
  assertEquals(result, {
    objectDeclaration: [
      'object',
      {simpleIdentifier: ['Sample']},
      {
        classBody: [
          '{',
          {
            classMemberDeclarations: []
          },
          '}'
        ]
      }
    ]
  });
});