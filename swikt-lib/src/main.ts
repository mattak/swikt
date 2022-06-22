import antlr4 from "antlr4/index.js";
import Swift5Lexer from "./generated/swift/Swift5Lexer.js";
import Swift5Parser from "./generated/swift/Swift5Parser.js";
import {GrammarVisitor} from "./visitor/GrammarVisitor.ts";
import KotlinParser from "./generated/kotlin/KotlinParser.js";
import KotlinLexer from "./generated/kotlin/KotlinLexer.js";
import {TObject} from "./util/Tree.ts";
import {KotlinPrinter} from "./printer/KotlinPrinter.ts";
import {KotlinInfoTable, SwiftKotlinConverter} from "./converter/SwiftKotlinConverter.ts";
import {KotlinPreprocessor} from "./preprocessor/KotlinPreprocessor.ts";

// parser
export function parseSwift(input: string): TObject {
  const chars = new antlr4.InputStream(input, undefined);
  const lexer = new Swift5Lexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer, undefined);
  const parser = new Swift5Parser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.top_level();
  return {top_level: tree.accept(new GrammarVisitor())};
}

export function parseKotlin(input: string): TObject {
  const chars = new antlr4.InputStream(input, undefined);
  const lexer = new KotlinLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer, undefined);
  const parser = new KotlinParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.kotlinFile();
  return {kotlinFile: tree.accept(new GrammarVisitor())};
}

// printer
export function printKotlin(tree: TObject): string {
  const printer = new KotlinPrinter();
  const lines = printer.printObject([], tree);
  return lines.join('\n');
}

// converter
export function convertSwiftTreeToKotlinTree(swiftTree: TObject, info: KotlinInfoTable): TObject {
  const converter = new SwiftKotlinConverter();
  converter.kotlinTable = info;
  return converter.visitObject([], swiftTree);
}

// preprocessor
export function preprocessSwiftTree(swiftTree: TObject): TObject{
  const preprocessor = new KotlinPreprocessor();
  return preprocessor.clean([], swiftTree);
}

// transpiler
export function transpileSwiftToKotlin(swiftCode: string, info: KotlinInfoTable): string {
  const swiftTree = preprocessSwiftTree(parseSwift(swiftCode));
  const kotlinTree = convertSwiftTreeToKotlinTree(swiftTree, info);
  return printKotlin(kotlinTree);
}