import Swift5Lexer from "./Swift5Lexer.js";
import {BitSet} from "../util/BitSet.ts";
import {Swift5ParserCompat} from "./Swift5ParserCompat.ts";
import Token from "antlr4/Token.js";
import Interval from "antlr4/misc/Interval.js";
import BufferedTokenStream from "antlr4/BufferedTokenStream.js";

export default class SwiftSupport {
  /* TODO
  There is one caveat to the rules above. If the ! or ? predefined operator
   has no whitespace on the left, it is treated as a postfix operator,
   regardless of whether it has whitespace on the right. To use the ? as
   the optional-chaining operator, it must not have whitespace on the left.
    To use it in the ternary conditional (? :) operator, it must have
    whitespace around both sides.
  */

  /*
  operator-head : /  =  -  +  !  *  %  <  >  &  |  ^  ~  ?
    | [\u00A1-\u00A7]
    | [\u00A9\u00AB]
    | [\u00AC\u00AE]
    | [\u00B0-\u00B1\u00B6\u00BB\u00BF\u00D7\u00F7]
    | [\u2016-\u2017\u2020-\u2027]
    | [\u2030-\u203E]
    | [\u2041-\u2053]
    | [\u2055-\u205E]
    | [\u2190-\u23FF]
    | [\u2500-\u2775]
    | [\u2794-\u2BFF]
    | [\u2E00-\u2E7F]
    | [\u3001-\u3003]
    | [\u3008-\u3030]
    ;
   */

  static operatorHead = new BitSet(0x10000);
  static operatorCharacter: BitSet;

  static leftWS = new BitSet(255);
  static rightWS = new BitSet(255);

  static initialize() {
    // operator-head → /  =­  -­  +­  !­  *­  %­  <­  >­  &­  |­  ^­  ~­  ?­
    this.operatorHead.set('/'.charCodeAt(0));
    this.operatorHead.set('='.charCodeAt(0));
    this.operatorHead.set('-'.charCodeAt(0));
    this.operatorHead.set('+'.charCodeAt(0));
    this.operatorHead.set('!'.charCodeAt(0));
    this.operatorHead.set('*'.charCodeAt(0));
    this.operatorHead.set('%'.charCodeAt(0));
    this.operatorHead.set('&'.charCodeAt(0));
    this.operatorHead.set('|'.charCodeAt(0));
    this.operatorHead.set('<'.charCodeAt(0));
    this.operatorHead.set('>'.charCodeAt(0));
    this.operatorHead.set('^'.charCodeAt(0));
    this.operatorHead.set('~'.charCodeAt(0));
    this.operatorHead.set('?'.charCodeAt(0));

    // operator-head → U+00A1–U+00A7
    this.operatorHead.set(0x00A1, 0x00A7 + 1);

    // operator-head → U+00A9 or U+00AB
    this.operatorHead.set(0x00A9);
    this.operatorHead.set(0x00AB);

    // operator-head → U+00AC or U+00AE
    this.operatorHead.set(0x00AC);
    this.operatorHead.set(0x00AE);

    // operator-head → U+00B0–U+00B1, U+00B6, U+00BB, U+00BF, U+00D7, or U+00F7
    this.operatorHead.set(0x00B0, 0x00B1 + 1);
    this.operatorHead.set(0x00B6);
    this.operatorHead.set(0x00BB);
    this.operatorHead.set(0x00BF);
    this.operatorHead.set(0x00D7);
    this.operatorHead.set(0x00F7);

    // operator-head → U+2016–U+2017 or U+2020–U+2027
    this.operatorHead.set(0x2016, 0x2017 + 1);
    this.operatorHead.set(0x2020, 0x2027 + 1);

    // operator-head → U+2030–U+203E
    this.operatorHead.set(0x2030, 0x203E + 1);

    // operator-head → U+2041–U+2053
    this.operatorHead.set(0x2041, 0x2053 + 1);

    // operator-head → U+2055–U+205E
    this.operatorHead.set(0x2055, 0x205E + 1);

    // operator-head → U+2190–U+23FF
    this.operatorHead.set(0x2190, 0x23FF + 1);

    // operator-head → U+2500–U+2775
    this.operatorHead.set(0x2500, 0x2775 + 1);

    // operator-head → U+2794–U+2BFF
    this.operatorHead.set(0x2794, 0x2BFF + 1);

    // operator-head → U+2E00–U+2E7F
    this.operatorHead.set(0x2E00, 0x2E7F + 1);

    // operator-head → U+3001–U+3003
    this.operatorHead.set(0x3001, 0x3003 + 1);

    // operator-head → U+3008–U+3030
    this.operatorHead.set(0x3008, 0x3020 + 1);

    this.operatorHead.set(0x3030);

    // operator-character → operator-head­
    this.operatorCharacter = this.operatorHead.clone();

    // operator-character → U+0300–U+036F
    this.operatorCharacter.set(0x0300, 0x036F + 1);
    // operator-character → U+1DC0–U+1DFF
    this.operatorCharacter.set(0x1DC0, 0x1DFF + 1);
    // operator-character → U+20D0–U+20FF
    this.operatorCharacter.set(0x20D0, 0x20FF + 1);
    // operator-character → U+FE00–U+FE0F
    this.operatorCharacter.set(0xFE00, 0xFE0F + 1);
    // operator-character → U+FE20–U+FE2F
    this.operatorCharacter.set(0xFE20, 0xFE2F + 1);
    this.operatorCharacter.set(0xE0100, 0xE01EF + 1);

    // operator-character → U+E0100–U+E01EF
    // Java works with 16-bit unicode chars. However, it can work for targets in other languages, e.g. in Swift
    // operatorCharacter.set(0xE0100,0xE01EF+1);

    this.leftWS.set(Swift5ParserCompat.WS);
    this.leftWS.set(Swift5ParserCompat.LPAREN);
    this.leftWS.set(Swift5ParserCompat.Interpolataion_multi_line);
    this.leftWS.set(Swift5ParserCompat.Interpolataion_single_line);
    this.leftWS.set(Swift5ParserCompat.LBRACK);
    this.leftWS.set(Swift5ParserCompat.LCURLY);
    this.leftWS.set(Swift5ParserCompat.COMMA);
    this.leftWS.set(Swift5ParserCompat.COLON);
    this.leftWS.set(Swift5ParserCompat.SEMI);

    this.rightWS.set(Swift5ParserCompat.WS);
    this.rightWS.set(Swift5ParserCompat.RPAREN);
    this.rightWS.set(Swift5ParserCompat.RBRACK);
    this.rightWS.set(Swift5ParserCompat.RCURLY);
    this.rightWS.set(Swift5ParserCompat.COMMA);
    this.rightWS.set(Swift5ParserCompat.COLON);
    this.rightWS.set(Swift5ParserCompat.SEMI);
    this.rightWS.set(Swift5ParserCompat.Line_comment);
    this.rightWS.set(Swift5ParserCompat.Block_comment);
  }

  private static isCharacterFromSet(token : Token, bitSet: BitSet): boolean {
    if (token.type == Token.EOF) {
      return false;
    } else {
      const text : string = token.text;
      const codepoint : number = text.codePointAt(0)!!;
      const charCount = codepoint >= 0x10000 ? 2 : 1; // Character.charCount(codepoint)
      if (charCount != text.length) {
        // not a single character
        return false;
      } else {
        return bitSet.get(codepoint);
      }
    }
  }

  static isOperatorHead(token : Token): boolean {
    return this.isCharacterFromSet(token, this.operatorHead);
  }

  static isOperatorCharacter(token : Token): boolean {
    return this.isCharacterFromSet(token, this.operatorCharacter);
  }

  public static isOpNext(tokens: BufferedTokenStream): boolean {
    const start: number = tokens.index;
    const lt: Token = tokens.get(start);
    const stop: number = this.getLastOpTokenIndex(tokens);
    return stop !== -1;
  }

  /**
   * Find stop token index of next operator; return -1 if not operator.
   */
  public static getLastOpTokenIndex(tokens: BufferedTokenStream): number {
    let currentTokenIndex: number = tokens.index; // current on-channel lookahead token index
    let currentToken: Token = tokens.get(currentTokenIndex);

    tokens.getText(undefined); // Ensures that tokens can be read
    // operator → dot-operator-head­ dot-operator-characters
    if (currentToken.type == Swift5ParserCompat.DOT && tokens.get(currentTokenIndex + 1).type == Swift5ParserCompat.DOT) {

      // dot-operator
      currentTokenIndex += 2; // point at token after ".."
      currentToken = tokens.get(currentTokenIndex);

      // dot-operator-character → .­ | operator-character­
      while (currentToken.type == Swift5ParserCompat.DOT || this.isOperatorCharacter(currentToken)) {
        currentTokenIndex++;
        currentToken = tokens.get(currentTokenIndex);
      }

      return currentTokenIndex - 1;
    }

    // operator → operator-head­ operator-characters­?

    if (this.isOperatorHead(currentToken)) {

      currentToken = tokens.get(currentTokenIndex);
      while (this.isOperatorCharacter(currentToken)) {
        currentTokenIndex++;
        currentToken = tokens.get(currentTokenIndex);
      }
      return currentTokenIndex - 1;
    } else {
      return -1;
    }
  }

  /**
   * "If an operator has whitespace around both sides or around neither side,
   * it is treated as a binary operator. As an example, the + operator in a+b
   * and a + b is treated as a binary operator."
   */
  public static isBinaryOp(tokens: BufferedTokenStream): boolean {
    const stop = this.getLastOpTokenIndex(tokens);
    if (stop == -1) return false;

    const start: number = tokens.index;
    const currentToken: Token = tokens.get(start);
    const prevToken: Token = tokens.get(start - 1); // includes hidden-channel tokens
    const nextToken: Token = tokens.get(stop + 1);
    const prevIsWS: boolean = this.isLeftOperatorWS(prevToken);
    const nextIsWS: boolean = this.isRightOperatorWS(nextToken);
    if (prevIsWS) {
      return nextIsWS;
    } else {
      if (currentToken.type == Swift5Lexer.BANG || currentToken.type == Swift5Lexer.QUESTION) {
        return false;
      } else {
        if (!nextIsWS) return nextToken.type != Swift5Lexer.DOT;
      }
    }
    return false;
  }

  /**
   * "If an operator has whitespace on the left side only, it is treated as a
   * prefix unary operator. As an example, the ++ operator in a ++b is treated
   * as a prefix unary operator."
   */
  public static isPrefixOp(tokens: BufferedTokenStream): boolean {
    const stop: number = this.getLastOpTokenIndex(tokens);
    if (stop == -1) return false;

    const start: number = tokens.index;
    const prevToken: Token = tokens.get(start - 1); // includes hidden-channel tokens
    const nextToken: Token = tokens.get(stop + 1);
    const prevIsWS: boolean = this.isLeftOperatorWS(prevToken);
    const nextIsWS: boolean = this.isRightOperatorWS(nextToken);
    return prevIsWS && !nextIsWS;
  }

  /**
   * "If an operator has whitespace on the right side only, it is treated as a
   * postfix unary operator. As an example, the ++ operator in a++ b is treated
   * as a postfix unary operator."
   * <p>
   * "If an operator has no whitespace on the left but is followed immediately
   * by a dot (.), it is treated as a postfix unary operator. As an example,
   * the ++ operator in a++.b is treated as a postfix unary operator (a++ .b
   * rather than a ++ .b)."
   */
  public static isPostfixOp(tokens: BufferedTokenStream): boolean {
    const stop: number = this.getLastOpTokenIndex(tokens);
    if (stop == -1) return false;

    const start: number = tokens.index;
    const prevToken: Token = tokens.get(start - 1); // includes hidden-channel tokens
    const nextToken: Token = tokens.get(stop + 1);
    const prevIsWS: boolean = this.isLeftOperatorWS(prevToken);
    const nextIsWS: boolean = this.isRightOperatorWS(nextToken);
    return !prevIsWS && nextIsWS ||
      !prevIsWS && nextToken.type == Swift5ParserCompat.DOT;
  }

  public static isOperator(tokens: BufferedTokenStream, op: string): boolean {
    const stop: number = this.getLastOpTokenIndex(tokens);
    if (stop == -1) return false;

    const start: number = tokens.index;
    const text: string = tokens.getText(new Interval(start, stop));

    return text === op;
  }

  public static isLeftOperatorWS(t: Token): boolean {
    return this.leftWS.get(t.type);
  }

  public static isRightOperatorWS(t: Token): boolean {
    return this.rightWS.get(t.type) || t.type == Token.EOF;
  }

  public static isSeparatedStatement(tokens: BufferedTokenStream, indexOfPreviousStatement: number): boolean {

    let indexFrom: number = indexOfPreviousStatement - 1;
    const indexTo: number = tokens.index - 1;

    if (indexFrom >= 0) {
      // Stupid check for new line and semicolon, can be optimized
      while (indexFrom >= 0 && tokens.get(indexFrom).getChannel == Token.HIDDEN_CHANNEL) {
        indexFrom--;
      }

      for (let i = indexTo; i >= indexFrom; i--) {
        const t: string = tokens.get(i).text;
        if (t.includes("\n") || t.includes(";")) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  }
}

SwiftSupport.initialize();