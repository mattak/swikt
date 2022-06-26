import {TArray, TArrayElement, TObject} from "../../util/Tree.ts";
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
      ...(structBody ? [convert_structBody__classBody(self, [...path, 'struct_body'], structBody)] : []),
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
          ? [convert_structMembers__classMemberDeclarations(self, [...path, 'struct_members'], structMembers)]
          : []
      ),
      '}'
    ]
  }
}

export function convert_structMembers__classMemberDeclarations(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const classMemberDeclarations: TObject[] = input.flatMap((x: TArrayElement) => {
    const array = TreeWalk.getArrayOrNull('struct_member', x);
    if (array) return [convert_structMember__classMemberDeclaration(self, [...path, 'struct_member'], array)];
    return [];
  });
  return {
    classMemberDeclarations: [
      ...classMemberDeclarations,
    ],
  };
}

export function convert_structMember__classMemberDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const declarations: TObject[] = input.flatMap((x: TArrayElement) => {
    const array = TreeWalk.getArrayOrNull('declaration', x);
    if (array) return self.visit([...path, 'declaration'], array);
    return [];
  });
  return {
    classMemberDeclaration: [
      ...declarations,
    ]
  };
}
