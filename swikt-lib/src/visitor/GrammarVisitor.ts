import ANTLRv4ParserVisitor from "../generated/antlr/ANTLRv4ParserVisitor";
import RuleContext from "antlr4/context/RuleContext";

export class GrammarVisitor extends ANTLRv4ParserVisitor {
  visitChildren(ctx: RuleContext): object | [] | null | string {
    if (!ctx) return null;
    // @ts-ignore
    if (ctx.children) {
      // @ts-ignore
      return ctx.children.map((child: any) => {
        let name = this.contextToName(child);
        if (child.children && child.children.length != 0) {
          const result: { [key: string]: any } = {}
          result[name] = child.accept(this);
          return result;
        } else if (child.constructor.name === 'TerminalNodeImpl') {
          const text = child.getText();
          return text.match(/^(\n\r?)+$/) ? '' : text
        } else {
          const result: { [key: string]: any } = {}
          result[name] = null;
          return result;
        }
      });
    }
    return null
  }

  private contextToName(ctx: RuleContext) {
    return ctx.constructor.name
      .replace(/^(.)(.+)Context\d*$/, (substring: string, ...args: any[]) => {
        return args[0].toLowerCase() + args[1];
      })
  }
}