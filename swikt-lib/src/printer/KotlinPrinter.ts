import {AbstractPrinter, CustomPrinter} from "./AbstractPrinter";

export class KotlinPrinter extends AbstractPrinter {
  private blockKeysList: string[][] = [];
  private prefixSpaceKeysList: string[][] = [
    ["propertyDeclaration", '='],
    ["assignment", '='],
    ['objectDeclaration', 'classBody'],
    ['classDeclaration', 'classBody'],
    ["functionDeclaration", 'functionBody'],
  ];
  private suffixSpaceKeysList: string[][] = [
    ['packageHeader', 'package'],
    ['importHeader', 'import'],
    ['objectDeclaration', 'object'],
    ['classDeclaration', 'class'],
    ["functionDeclaration", 'fun'],
    ["functionDeclaration", ':'],
    // ["functionDeclaration", 'functionValueParameters'],
    ["propertyDeclaration", '='],
    ["assignment", '='],
    ["variableDeclaration", ':'],
    ['classParameters', ','],
    ['classParameter', ':'],
    ["functionBody", '='],
    ["functionValueParameter", ','],
    ["parameter", ':'],
    ['modifier'],
    ['val'],
    ['var'],
  ];
  private inlineKeysList: string[][] = [
    ['packageHeader'],
    ['importHeader'],
    ['classParameter'],
    ['classParameters'],
  ];
  private newLineCountMap1: { [key: string]: number } = {
    'packageHeader': 1,
    'importList': 1,
    'classDeclaration': 1,
  };
  private joinWithSpaceList: string[][] = [];
  private customPrinterMap: { [key: string]: CustomPrinter } = {
    'classDeclaration': this.printClassDeclaration,
    'objectDeclaration': this.printObjectDeclaration,
    'functionDeclaration': this.printFunctionDeclaration,
    'propertyDeclaration': this.printPropertyDeclaration,
    'block': this.printBlock,
    'classBody': this.printClassBody,
    'functionBody': this.printFunctionBody,
    'lambdaLiteral': this.printLambdaLiteral,
    'postfixUnaryExpression': this.printPostfixUnaryExpression,
    'valueArguments': this.printValueArguments,
    'assignment': this.printAssignment,
    'semis': this.printSemis,
  };

  override getDisplayStyle(tree: string[]): 'block' | 'inline' | null {
    if (this.containsKeysList(this.blockKeysList, tree)) return 'block';
    if (this.containsKeysList(this.inlineKeysList, tree)) return 'inline';
    return null;
  }

  override getNewlineCount(tree: string[]): number {
    if (tree.length < 1) return 0;
    const key = tree[tree.length - 1];
    return this.newLineCountMap1[key] ?? 0;
  }

  override getCustomPrinter(key: string): CustomPrinter | null {
    return this.customPrinterMap[key] ?? super.getCustomPrinter(key);
  }

  override isPrefixSpace(tree: string[]): boolean {
    if (this.containsKeysList(this.prefixSpaceKeysList, tree)) return true;
    return super.isPrefixSpace(tree);
  }

  override isSuffixSpace(tree: string[]): boolean {
    if (this.containsKeysList(this.suffixSpaceKeysList, tree)) return true;
    return super.isSuffixSpace(tree);
  }

  override isJoinWithSpace(tree: string[]): boolean {
    if (this.containsKeysList(this.joinWithSpaceList, tree)) return true;
    return super.isJoinWithSpace(tree);
  }

  private printClassDeclaration(self: AbstractPrinter, tree: string[], value: any): string[] {
    return (self as KotlinPrinter).printObjectDeclaration(self, tree, value);
  }

  private printObjectDeclaration(self: AbstractPrinter, tree: string[], value: any): string[] {
    const valueArray = value as any[];
    let classBodyIndex = valueArray.findIndex((v, i, o) => typeof v === 'object' && 'classBody' in v);

    const prefixArray = valueArray.slice(0, classBodyIndex);
    const prefixResult = self.printArray(tree, prefixArray);
    const suffixArray = valueArray.slice(classBodyIndex);
    const suffixResult = self.printArray(tree, suffixArray);

    const firstLine = [
      ...prefixResult,
      ' ',
      suffixResult[0]
    ].join('');

    const restLines = suffixResult.slice(1);
    return [
      firstLine,
      ...restLines,
    ];
  }

  private printFunctionDeclaration(self: AbstractPrinter, tree: string[], value: any): string[] {
    const valueArray = value as any[];
    const functionBodyIndex = valueArray.findIndex(x => typeof x === 'object' && 'functionBody' in x);

    const prefixArray = valueArray.slice(0, functionBodyIndex);
    const prefixResult = self.printArray(tree, prefixArray);
    const suffixArray = valueArray.slice(functionBodyIndex);
    const suffixResult = self.printArray(tree, suffixArray);

    const firstLine = [
      ...prefixResult,
      ' ',
      suffixResult[0]
    ].join('');
    const restLines = suffixResult.slice(1);

    return [
      firstLine,
      ...restLines,
    ];
  }

  private printPropertyDeclaration(self: AbstractPrinter, tree: string[], value: any): string[] {
    return (self as KotlinPrinter).printPreExpressionStyle(self, tree, value, 'expression');
  }

  private printAssignment(self: AbstractPrinter, tree: string[], value: any): string[] {
    return (self as KotlinPrinter).printPreExpressionStyle(self, tree, value, 'expression');
  }

  private printBlock(self: AbstractPrinter, tree: string[], value: any): string[] {
    return (self as KotlinPrinter).printCurlyBracketStyle(self, tree, value, 'statements')
  }

  private printClassBody(self: AbstractPrinter, tree: string[], value: any): string[] {
    return (self as KotlinPrinter).printCurlyBracketStyle(self, tree, value, 'classMemberDeclarations')
  }

  private printFunctionBody(self: AbstractPrinter, tree: string[], value: any): string[] {
    const valueArray = value as any[];
    const expressionIndex = valueArray.findIndex((v, i, o) => typeof v === "object" && 'expression' in v);
    if (expressionIndex < 0) {
      return self.printArray(tree, valueArray);
    }

    const prefixArray = valueArray.slice(0, expressionIndex);
    const prefixResult = self.printArray(tree, prefixArray);
    const suffixArray = valueArray.slice(expressionIndex);
    const suffixResult = self.printArray(tree, suffixArray);

    const firstLine = [
      ...prefixResult,
      suffixResult[0]
    ].join('');
    const restLines = suffixResult.slice(1);

    return [
      firstLine,
      ...restLines,
    ];
  }

  private printLambdaLiteral(self: AbstractPrinter, tree: string[], value: any): string[] {
    return (self as KotlinPrinter).printCurlyBracketStyle(self, tree, value, 'statements');
  }

  private printPostfixUnaryExpression(self: AbstractPrinter, tree: string[], value: any): string[] {
    const valueArray = value as any[];

    let result: string[] = [];
    let firstLine = (self as KotlinPrinter).print(tree, valueArray[0]).join('');

    for (let i = 1; i < valueArray.length; i++) {
      const e = valueArray[i];
      const printer = (self as KotlinPrinter);
      const lines = printer.print(tree, e);
      if (lines.length <= 0) continue

      const isCallSuffix = printer.hasKeysInObject(e, ['postfixUnarySuffix', 'callSuffix']);
      if (!isCallSuffix || lines.length == 1) {
        firstLine = firstLine + lines.join('');
        continue;
      }

      if (lines[0].startsWith('{')) firstLine += ' ';
      firstLine += lines[0];

      const restLines = lines.slice(1, lines.length - 1);
      result.push(firstLine);
      result.push(...restLines);
      firstLine = lines[lines.length - 1];
    }
    result.push(firstLine);

    return result;
  }

  private printValueArguments(self: AbstractPrinter, tree: string[], value: any): string[] {
    const valueArray = value as any[];
    const linesMap: string[][] = [];

    let hasMultilineArguments = false;
    let startValueArgumentIndex = -1;
    let endValueArgumentIndex = -1;
    for (let i = 0; i < valueArray.length; i++) {
      const element = valueArray[i];
      const lines = (self as KotlinPrinter).print(tree, element);
      if (typeof element === 'object' && element['valueArgument']) {
        if (lines.length > 1) hasMultilineArguments = true;
        if (startValueArgumentIndex === -1) startValueArgumentIndex = i;
        endValueArgumentIndex = i;
      }
      linesMap.push(lines);
    }

    if (hasMultilineArguments) {
      const results: string[] = [];

      for (let i = 0; i < valueArray.length; i++) {
        const element = valueArray[i];
        if (typeof element === 'object' && 'valueArgument' in element) {
          results.push(...self.addIndent(linesMap[i], self.getIndent()));
        } else if (linesMap[i].length === 1 && linesMap[i][0] === ',') {
          results[results.length - 1] += ',';
        } else {
          results.push(...linesMap[i]);
        }
      }
      return results;
    } else {
      const results: string[] = [];
      for (let i = 0; i < valueArray.length; i++) {
        results.push(...linesMap[i]);
      }
      const single = [results.join('')];
      return single;
    }
  }

  private printSemis(self: AbstractPrinter, tree: string[], value: any): string[] {
    return []
  }

  private printPreExpressionStyle(self: AbstractPrinter, tree: string[], value: any, middleKeyName: string): string[] {
    const valueArray = value as any[];
    const expressionIndex = valueArray.findIndex((v, i, o) => typeof v === 'object' && v[middleKeyName]);

    if (expressionIndex > 0) {
      const prefixArray = valueArray.slice(0, expressionIndex);
      const prefixResult = self.printArray(tree, prefixArray);
      const suffixArray = valueArray.slice(expressionIndex);
      const suffixResult = self.printArray(tree, suffixArray);
      const prefixLine = prefixResult.join('') + suffixResult[0];
      const suffixLine = suffixResult.slice(1);

      return [
        prefixLine,
        ...suffixLine
      ]
    } else {
      const prefixResult = self.printArray(tree, valueArray);
      const prefixLine = prefixResult.join('');
      return [
        prefixLine
      ]
    }
  }

  private printCurlyBracketStyle(self: AbstractPrinter, tree: string[], value: any, middleKeyName: string): string[] {
    const valueArray = value as any[];
    const middleIndex = valueArray.findIndex((v, i, o) => typeof v === "object" && middleKeyName in v);

    if (middleIndex < 0) return ['{', '}'];

    const prefixArray = valueArray.slice(0, middleIndex);
    const prefixResult = self.printArray(tree, prefixArray);
    const middleValue = valueArray[middleIndex];
    const middleResult = self.addIndent(self.print(tree, middleValue), self.getIndent());
    const suffixArray = valueArray.slice(middleIndex + 1);
    const suffixResult = self.printArray(tree, suffixArray);

    return [
      prefixResult.join(' '),
      ...middleResult,
      ...suffixResult,
    ];
  }

  private containsKeysList(keysList: string[][], tree: string[]): boolean {
    for (let keys of keysList) {
      if (tree.length >= keys.length) {
        const treeKeys = tree.slice(tree.length - keys.length, tree.length);
        if (this.isArrayEqual(treeKeys, keys)) return true;
      }
    }
    return false;
  }

  public hasKeysInObject(obj: object, keys: string[]): boolean {
    let target: any = obj;

    for (let key of keys) {
      if (typeof target === 'object' && key in target) {
        target = target[key];
      } else if (Array.isArray(target)) {
        const targetArray = target as any[];
        const index = targetArray.findIndex(e => typeof e === 'object' && key in e);
        if (index < 0) return false;
        target = targetArray[index][key];
      } else {
        return false;
      }
    }

    return true;
  }
}