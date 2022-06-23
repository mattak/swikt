import {AbstractConverter} from "./AbstractConverter.ts";
import {Converter} from "./Converter.ts";
import {TArray, TObject} from "../util/Tree.ts";
import {convert_declaration__declaration} from "./declarations/declaration.ts";
import {
  convert_structBody__classBody,
  convert_structDeclaration__objectDeclaration,
  convert_structMember__classMemberDeclaration,
  convert_structMembers__classMemberDeclarations,
} from "./declarations/structDeclaration.ts";
import {
  convert_statement__topLevelObject,
  convert_statements__importList,
  convert_statements__topLevelObjectList,
} from "./statements/statements.ts";
import {
  convert___packageHeader,
  convert__importList,
  convert_topLevel__kotlinFile
} from "./declarations/topLevelDeclaration.ts";
import {convert_functionDeclaration__functionDeclaration} from "./declarations/functionDeclaration.ts";

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
  private _kotlinTable: KotlinInfoTable = <KotlinInfoTable>{};

  get kotlinTable(): KotlinInfoTable {
    return this._kotlinTable;
  }

  set kotlinTable(table: KotlinInfoTable) {
    this._kotlinTable = table;
  }

  getConverter(key: string): Converter<SwiftKotlinConverter> | null {
    if (key in this.swiftTable) return this.swiftTable[key];
    return super.getConverter(key);
  }

  convert_topLevel__kotlinFile(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_topLevel__kotlinFile(self, path, input);
  }

  convert___packageHeader(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert___packageHeader(self, path, input);
  }

  convert__importList(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert__importList(self, path, input);
  }

  convert_statements__importList(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_statements__importList(self, path, input);
  }

  convert_statements__topLevelObjectList(self: SwiftKotlinConverter, path: string[], input: TArray): TObject[] {
    return convert_statements__topLevelObjectList(self, path, input);
  }

  convert_statement__topLevelObject(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_statement__topLevelObject(self, path, input);
  }

  convert_declaration__declaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_declaration__declaration(self, path, input)
  }

  convert_structDeclaration__objectDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_structDeclaration__objectDeclaration(self, path, input);
  }

  convert_structBody__classBody(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_structBody__classBody(self, path, input);
  }

  convert_structMembers__classMemberDeclarations(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_structMembers__classMemberDeclarations(self, path, input);
  }

  convert_structMember__classMemberDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_structMember__classMemberDeclaration(self, path, input);
  }

  convert_functionDeclaration__functionDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_functionDeclaration__functionDeclaration(self, path, input);
  }
}
