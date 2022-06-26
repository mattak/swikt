import {AbstractConverter} from "./AbstractConverter.ts";
import {Converter} from "./Converter.ts";
import {TArray, TObject} from "../util/Tree.ts";
import {convert_declaration__declaration} from "./declarations/declaration.ts";
import {convert_structDeclaration__objectDeclaration,} from "./declarations/structDeclaration.ts";
import {convert_statement__statement,} from "./statements/statements.ts";
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

export interface SwiftKotlinConvertTable {
  declaration?: Converter<SwiftKotlinConverter>,
  statement?: Converter<SwiftKotlinConverter>,
}

export class SwiftKotlinConverter extends AbstractConverter<Converter<SwiftKotlinConverter>> {
  private swiftTable: { [key: string]: Converter<SwiftKotlinConverter> } = {
    top_level: this.convert_topLevel__kotlinFile,
    declaration: this.convert_declaration__declaration,
    statement: this.convert_statement__statement,
  };
  private _kotlinTable: KotlinInfoTable = <KotlinInfoTable>{};

  constructor(convertTable?: SwiftKotlinConvertTable) {
    super();
    if (convertTable) {
      this.swiftTable = {
        ...this.swiftTable,
        ...convertTable,
      }
    }
  }

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

  convert(input: TObject): TObject {
    return this.visitRoot('top_level', input);
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

  convert_statement__statement(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_statement__statement(self, path, input);
  }

  convert_declaration__declaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_declaration__declaration(self, path, input)
  }

  convert_structDeclaration__objectDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_structDeclaration__objectDeclaration(self, path, input);
  }

  convert_functionDeclaration__functionDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
    return convert_functionDeclaration__functionDeclaration(self, path, input);
  }
}
