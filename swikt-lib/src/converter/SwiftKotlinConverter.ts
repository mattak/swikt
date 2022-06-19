import {AbstractConverter} from "./AbstractConverter";
import {Converter} from "./Converter";
import {TArray, TObject} from "../util/Tree";
import {TreeWalk} from "../util/TreeWalk";

export interface KotlinInfoTable {
  package: string, // e.g. com.example.sample
  importList?: string[], // e.g. ['io.github.Token', 'com.example.Test']
}

export class SwiftKotlinConverter extends AbstractConverter<Converter<SwiftKotlinConverter>> {
  private swiftTable: { [key: string]: Converter<SwiftKotlinConverter> } = {
    'top_level': this.convert_topLevel__kotlinFile,
    'struct_declaration': this.convert_structDeclaration__objectDeclaration,
    'statement': this.convert_statement__topLevelObject,
  };
  private kotlinTable: KotlinInfoTable = <KotlinInfoTable>{};

  setKotlinTable(table: KotlinInfoTable) {
    this.kotlinTable = table;
  }

  getConverter(key: string): Converter<SwiftKotlinConverter> | null {
    if (key in this.swiftTable) return this.swiftTable[key];
    return super.getConverter(key);
  }

  convert_topLevel__kotlinFile(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    // package
    const results: TArray = [];
    results.push(self.convert___packageHeader(self, path, input));

    const statements = TreeWalk.getArrayOrNullByKeys(['statements'], input);
    if (statements) {
      // imports
      const kotlinImportList = self.convert_statements__importList(self, [...path, 'statements'], statements);
      if (Object.keys(kotlinImportList).length > 0) {
        results.push(kotlinImportList);
      }

      // topLevelObjects
      const topLevelObjects = self.convert_statements__topLevelObjectList(self, [...path, 'statements'], statements);
      results.push(...topLevelObjects);
    }

    return {
      kotlinFile: results,
    };
  }

  convert___packageHeader(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return {
      packageHeader: [
        'package',
        this.createIdentifier(self.kotlinTable['package']),
      ]
    }
  }

  convert__importList(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    const importList = self.kotlinTable['importList'];
    if (importList) {
      const imports = importList.map(x => <TObject>{importHeader: ['import', this.createIdentifier(x)]})
      return {importList: imports}
    }
    return {}
  }

  convert_statements__importList(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    const importDeclaration = TreeWalk.getArrayOrNullByKeys(['statement', 'declaration', 'import_declaration'], input);
    if (importDeclaration) {
      return self.convert__importList(self, [
        ...path, 'statement', 'declaration', 'import_declaration'
      ], importDeclaration);
    } else {
      return self.convert__importList(self, path, input);
    }
  }

  convert_statements__topLevelObjectList(self: SwiftKotlinConverter, path: string[], input: TArray): TObject[] {
    return input.flatMap(x => {
      const statement = TreeWalk.getArrayOrNull('statement', x);
      if (!statement) return [];

      const result = self.convert_statement__topLevelObject(self, [...path, 'statement'], statement);
      if (TreeWalk.isEmptyObject(result)) return []
      return [result];
    });
  }

  convert_statement__topLevelObject(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    const declaration = TreeWalk.getArrayOrNullByKeys(['declaration'], input);
    if (!declaration) return {}

    const result = self.convert_declaration__declaration(self, [...path, 'declaration'], declaration)
    if (TreeWalk.isEmptyObject(result)) return {};

    return {
      topLevelObject: [
        result
      ]
    }
  }

  convert_declaration__declaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    const array = input.flatMap(x => {
      const [key, elements] = TreeWalk.getFirstOrNull(x);
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

  convert_structDeclaration__objectDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    const matched = TreeWalk.getArrayOrNullByKeys(['struct_name', 'identifier'], input);
    const name = matched ? matched[0] : '';
    const structBody = TreeWalk.getArrayOrNullByKeys(['struct_body'], input);
    return {
      objectDeclaration: [
        'object',
        {simpleIdentifier: [name]},
        ...(structBody ? [self.convert_structBody__classBody(self, [...path, 'struct_body'], structBody)] : []),
      ]
    };
  }

  convert_structBody__classBody(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    // convert to struct member
    const structMembers = TreeWalk.getArrayOrNullByKeys(['struct_members'], input);
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

  convert_structMembers__classMemberDeclarations(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
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

  convert_structMember__classMemberDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
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

  createIdentifier(name: string): TObject {
    const simpleIdentifiers = name.split('.').map(x => <TObject>{simpleIdentifier: [x]});
    const identifiers = [];
    for (let i = 0; i < simpleIdentifiers.length; i++) {
      identifiers.push(simpleIdentifiers[i]);
      if (i < simpleIdentifiers.length - 1) {
        identifiers.push('.');
      }
    }
    return {
      identifier: identifiers,
    };
  }
}
