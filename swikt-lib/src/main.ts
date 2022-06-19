import antlr4 from "antlr4";
import ANTLRv4ParserVisitor from "./generated/antlr/ANTLRv4ParserVisitor";

export function parseSwift(input: string): any {
  // const chars = new antlr4.InputStream(input, undefined);
  // return chars;

  const chars = new antlr4.InputStream(input, undefined);
  // const lexer = new Swift5Lexer(chars);
  // const tokens = new antlr4.CommonTokenStream(lexer, undefined);
  // const parser = new Swift5Parser(tokens);
  // parser.buildParseTrees = true;
  // const tree = parser.top_level();
  // return {top_level: tree.accept(new GrammarVisitor())};
  return new ANTLRv4ParserVisitor();
}