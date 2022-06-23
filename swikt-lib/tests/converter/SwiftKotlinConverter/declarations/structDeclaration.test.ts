import {SwiftKotlinConverter} from "../../../../src/converter/SwiftKotlinConverter.ts";
import {TArray, TObject} from "../../../../src/util/Tree.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {
  convert_structMembers__classMemberDeclarations
} from "../../../../src/converter/declarations/structDeclaration.ts";

const converter = new SwiftKotlinConverter({
  declaration(self, tree, input): TObject {
    return {declaration: ['OK']}
  }
});

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

Deno.test('convert_structMembers__classMemberDeclarations', () => {
  const input: TArray = [{
    "struct_member": [
      {
        "declaration": []
      }
    ]
  }];
  const result: TObject = convert_structMembers__classMemberDeclarations(converter, [], input);
  assertEquals(result, {
    'classMemberDeclarations': [
      {
        'classMemberDeclaration': [
          {
            'declaration': ['OK']
          }
        ]
      }
    ]
  });
});

Deno.test('convert_structMember__classMemberDeclaration', () => {
  const input: TObject = {
    "declaration": [
      {
        "function_declaration": []
      }
    ]
  };
  const result: TObject = converter.visitObject([], input);
  assertEquals(result, {
    'declaration': ["OK"]
  });
});