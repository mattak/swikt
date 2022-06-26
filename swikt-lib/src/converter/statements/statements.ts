import {TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";

export function convert_statements__statements(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const statements = input.flatMap(x => {
    const statement = TreeWalk.getArrayOrNull('statement', x);
    if (!statement) return [];
    return self.visit([...path, 'statement'], statement);
  });
  return {
    statements: statements,
  }
}

export function convert_statements__importList(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const importDeclaration = TreeWalk.firstArrayOrNullByKeys(['statement', 'declaration', 'import_declaration'], input);
  if (importDeclaration) {
    return self.convert__importList(self, [
      ...path, 'statement', 'declaration', 'import_declaration'
    ], importDeclaration);
  } else {
    return self.convert__importList(self, path, input);
  }
}

export function convert_statements__topLevelObjectList(self: SwiftKotlinConverter, path: string[], input: TArray): TObject[] {
  return input.flatMap(x => {
    const statement = TreeWalk.getArrayOrNull('statement', x);
    if (!statement) return [];

    const result = convert_statement__topLevelObject(self, [...path, 'statement'], statement);
    if (TreeWalk.isEmptyObject(result)) return []
    return [result];
  });
}

export function convert_statement__topLevelObject(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const declaration = TreeWalk.firstArrayOrNullByKeys(['declaration'], input);
  if (!declaration) return {}

  const result = self.convert_declaration__declarations(self, [...path, 'declaration'], declaration)
  if (TreeWalk.isEmptyArray(result)) return {};

  return {
    topLevelObject: result
  }
}

export function convert_statement__statements(self: SwiftKotlinConverter, path: string[], input: TArray): TObject[] {
  return input.flatMap(x => {
    const [key, elements] = TreeWalk.firstKeyValueOrNull(x);
    if (!key) return [];
    switch(key) {
      case 'declaration': {
        return self.convert_declaration__declarations(self, [...path, 'declaration'], elements);
      }
      default: {
        return [];
      }
    }
  }).map(x => {
    return {
      statement: [x]
    }
  });
}