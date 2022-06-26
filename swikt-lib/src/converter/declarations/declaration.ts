import {TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";

export function convert_declaration__declarations(self: SwiftKotlinConverter, path: string[], input: TArray): TObject[] {
  const array: TObject[] = input.flatMap(x => {
    const [key, elements] = TreeWalk.firstKeyValueOrNull(x);
    if (TreeWalk.isEmptyArray(elements)) return []

    switch (key) {
      case 'struct_declaration': {
        const result = self.convert_structDeclaration__objectDeclaration(self, [...path, 'struct_declaration'], elements);
        if (TreeWalk.isEmptyObject(result)) return []
        return [result];
      }
      case 'function_declaration': {
        const result = self.convert_functionDeclaration__functionDeclaration(self, [...path, 'function_declaration'], elements);
        if (TreeWalk.isEmptyObject(result)) return []
        return [result];
      }
      default: {
        return []
      }
    }
  }).map((x: TObject) => {
    return {
      declaration: [x]
    }
  });
  if (TreeWalk.isEmptyArray(array)) return array;

  return array;
}
