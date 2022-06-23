import {TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";

export function convert_declaration__declaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const array = input.flatMap(x => {
    const [key, elements] = TreeWalk.firstKeyValueOrNull(x);
    if (TreeWalk.isEmptyArray(elements)) return []

    switch (key) {
      case 'struct_declaration': {
        const result = self.convert_structDeclaration__objectDeclaration(self, [...path, 'struct_declaration'], elements);
        if (TreeWalk.isEmptyObject(result)) return []
        return [result];
      }
      default: {
        return []
      }
    }
  });
  if (TreeWalk.isEmptyArray(array)) return {}

  return {
    declaration: array
  };
}
