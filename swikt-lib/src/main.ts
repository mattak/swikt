import antlr4 from "antlr4";
import Swift5Lexer from "./generated/swift/Swift5Lexer";
import Swift5Parser from "./generated/swift/Swift5Parser";
import {GrammarVisitor} from "./visitor/GrammarVisitor";
import KotlinParser from "./generated/kotlin/KotlinParser";
import KotlinLexer from "./generated/kotlin/KotlinLexer";

export function parseSwift(input: string): any {
  const chars = new antlr4.InputStream(input, undefined);
  const lexer = new Swift5Lexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer, undefined);
  const parser = new Swift5Parser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.top_level();
  return {top_level: tree.accept(new GrammarVisitor())};
}

export function parseKotlin(input: string): any {
  const chars = new antlr4.InputStream(input, undefined);
  const lexer = new KotlinLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer, undefined);
  const parser = new KotlinParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.kotlinFile();
  return {kotlinFile: tree.accept(new GrammarVisitor())};
}