import {TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";

export function convert_structDeclaration__objectDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const matched = TreeWalk.firstArrayOrNullByKeys(['struct_name', 'identifier'], input);
  const name = matched ? matched[0] : '';
  const structBody = TreeWalk.firstArrayOrNullByKeys(['struct_body'], input);
  return {
    objectDeclaration: [
      'object',
      {simpleIdentifier: [name]},
      ...(structBody ? [self.convert_structBody__classBody(self, [...path, 'struct_body'], structBody)] : []),
    ]
  };
}

export function convert_structBody__classBody(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  // convert to struct member
  const structMembers = TreeWalk.firstArrayOrNullByKeys(['struct_members'], input);
  return {
    classBody: [
      '{',
      ...(
        structMembers
          ? [self.convert_structMembers__classMemberDeclarations(self, [...path, 'struct_members'], structMembers)]
          : []
      ),
      '}'
    ]
  }
}

export function convert_structMembers__classMemberDeclarations(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const classMemberDeclarations: TObject[] = input.flatMap(x => (typeof x === 'object' && 'struct_member' in x)
    ? [self.convert_structMember__classMemberDeclaration(self, [...path, 'struct_member'], input)]
    : []
  );
  return {
    classMemberDeclarations: [
      ...classMemberDeclarations,
    ],
  };
}

export function convert_structMember__classMemberDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const declarations: TObject[] = input.flatMap(x => (typeof x === 'object' && 'declaration' in x)
    ? [self.convert_declaration__declaration(self, [...path, 'declaration'], input)]
    : []
  );
  return {
    classMemberDeclaration: [
      ...declarations,
    ]
  };
}
