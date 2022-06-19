export class AbstractPreprocessor {
  clean(tree: string[], value: any): any {
    if (value === null) return [];
    if (typeof value === 'string') return this.cleanElement(tree, value);
    if (Array.isArray(value)) return this.cleanArray(tree, value);
    if (typeof value === 'object') return this.cleanObject(tree, value);
    return value
  }

  cleanArray(tree: string[], elements: any[]): any {
    const result = [];

    for (let e of elements) {
      if (typeof e === 'object') {
        result.push(this.cleanObject(tree, e));
      } else if (Array.isArray(e)) {
        result.push(this.cleanArray(tree, e));
      } else if (typeof e === 'string') {
        // NOTE: ignore empty space
        if (e.length > 0) {
          result.push(this.cleanElement(tree, e));
        }
      }
    }

    return result;
  }

  cleanObject(tree: string[], obj: { [key: string]: any }): any {
    const result: { [key: string]: any } = {};

    for (let key of Object.keys(obj)) {
      tree.push(key);
      const v = obj[key];
      if (typeof v === 'object') {
        result[key] = this.cleanKeyValue(tree, key, v);
      } else if (Array.isArray(v)) {
        result[key] = this.cleanArray(tree, v);
      } else if (typeof v === 'string') {
        result[key] = this.cleanElement(tree, v);
      }
      tree.pop();
    }

    return result;
  }

  cleanKeyValue(tree: string[], key: string, value: any): any {
    const customPrinter = this.getCustomCleaner(key);
    if (customPrinter) return customPrinter(this, tree, value);
    return this.clean(tree, value);
  }

  cleanElement(tree: string[], value: string): any {
    return value;
  }

  getCustomCleaner(key: string): any {
    return null;
  }
}
