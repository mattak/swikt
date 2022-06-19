export type CustomPrinter = (self: AbstractPrinter, tree: string[], value: any) => string[];

export class AbstractPrinter {
  isPrefixSpace(tree: string[]): boolean {
    return false;
  }

  isSuffixSpace(tree: string[]): boolean {
    return false;
  }

  getDisplayStyle(tree: string[]): 'block' | 'inline' | null {
    return null
  }

  getNewlineCount(tree: string[]): number {
    return 0
  }

  getIndent(): string {
    return "  ";
  }

  isJoinWithSpace(tree: string[]): boolean {
    return false;
  }

  isArrayEqual(a: any[], b: any[]) {
    if (a.length != b.length) return false;
    for (let i = 0, n = a.length; i < n; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  getCustomPrinter(key: string): CustomPrinter | null {
    return null;
  }

  print(tree: string[], value: any): string[] {
    if (value === null) return []
    if (typeof value === 'string') return this.printElement(tree, value);
    if (Array.isArray(value)) return this.printArray(tree, value);
    if (typeof value === 'object') return this.printObject(tree, value);
    return []
  }

  printArray(tree: string[], elements: any[]): string[] {
    const result = []
    for (let e of elements) {
      if (typeof e === 'object') {
        result.push(...this.printObject(tree, e))
      } else if (Array.isArray(e)) {
        result.push(...this.printArray(tree, e))
      } else if (typeof e === 'string') {
        result.push(...this.printElement(tree, e));
      }
    }
    return result;
  }

  printObject(tree: string[], obj: { [key: string]: any }): string[] {
    const result = [];

    for (let key of Object.keys(obj)) {
      tree.push(key);
      const v = obj[key];
      if (typeof v === 'object') {
        result.push(...this.printKeyValue(tree, key, v));
      } else if (Array.isArray(v)) {
        result.push(...this.printArray(tree, v));
      } else if (typeof v === 'string') {
        result.push(...this.printElement(tree, v));
      }
      tree.pop();
    }

    return result;
  }

  printKeyValue(tree: string[], key: string, value: any): string[] {
    const customPrinter = this.getCustomPrinter(key);
    if (customPrinter) return customPrinter(this, tree, value);

    let lines = [];
    if (this.isPrefixSpace(tree)) lines.push(" ");

    // execute
    lines.push(...this.print(tree, value));

    if (this.isJoinWithSpace(tree)) lines = [lines.join(' ')];
    if (this.isSuffixSpace(tree)) lines.push(" ");

    switch (this.getDisplayStyle(tree)) {
      case 'block': {
        lines = this.addIndent(lines, this.getIndent());
        break;
      }
      case 'inline': {
        lines = [lines.join('')];
        break;
      }
    }

    const newLineCount = this.getNewlineCount(tree);
    for (let i = 0; i < newLineCount; i++) lines.push('');

    return lines;
  }

  printElement(tree: string[], value: string): string[] {
    if (value === '<EOF>') return [];
    const result = [];
    tree.push(value);
    if (this.isPrefixSpace(tree)) result.push(" ");
    result.push(value);
    if (this.isSuffixSpace(tree)) result.push(" ");
    tree.pop();
    return result;
  }

  addIndent(lines: string[], indent: string): string[] {
    return lines.map(x => {
      if (x.length < 1) return x;
      return indent + x
    });
  }
}
