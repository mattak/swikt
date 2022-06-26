import {TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {createIdentifier} from "../util/identifier.ts";
import {convert_statements__importList, convert_statements__topLevelObjectList} from "../statements/statements.ts";

export function convert_topLevel__kotlinFile(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  // package
  const results: TArray = [];
  results.push(self.convert___packageHeader(self, path, input));

  const statements = TreeWalk.firstArrayOrNullByKeys(['statements'], input);
  if (statements) {
    // imports
    const kotlinImportList = convert_statements__importList(self, [...path, 'statements'], statements);
    if (Object.keys(kotlinImportList).length > 0) {
      results.push(kotlinImportList);
    }

    // topLevelObjects
    const topLevelObjects = convert_statements__topLevelObjectList(self, [...path, 'statements'], statements);
    results.push(...topLevelObjects);
  }

  return {
    kotlinFile: results,
  };
}

export function convert___packageHeader(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  return {
    packageHeader: [
      'package',
      createIdentifier(self.kotlinTable['package']),
    ]
  }
}

export function convert__importList(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const importList = self.kotlinTable['importList'];
  if (importList) {
    const imports = importList.map(x => <TObject>{importHeader: ['import', createIdentifier(x)]})
    return {importList: imports}
  }
  return {}
}
