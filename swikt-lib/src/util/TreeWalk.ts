import {TArray, TArrayElement, TObject} from "./Tree.ts";

export class TreeWalk {
  public static isEmptyObject(input: TObject): boolean {
    return Object.keys(input).length < 1
  }

  public static isEmptyArray(input: TArray): boolean {
    return input.length < 1
  }

  public static isTargetKey(key: string, target: any): boolean {
    return typeof target === 'object' && key in target;
  }

  public static getArrayOrNull(key: string, target: TArrayElement): TArray | null {
    if (typeof target === 'object' && key in target) return target[key];
    return null
  }

  // keys: ['a','b']
  // input: [ { a: [ { b: [ 'c' ] } ] } ]
  // return: ['c']
  public static getArrayOrNullByKeys(keys: string[], input: TArray): TArray | null {
    if (keys.length < 1) return input;

    const key = keys[0];

    for (let i = 0; i < input.length; i++) {
      const value = this.getArrayOrNull(key, input[i]);
      if (!value) continue;

      const result = this.getArrayOrNullByKeys(keys.slice(1), value);
      if (result) return result;
    }

    return null;
  }

  public static getFirstOrNull(target: TArrayElement): [string | null, TArray] {
    if (typeof target === 'object') {
      const keys = Object.keys(target);
      if (keys.length < 1) return [null, []];
      const key = keys[0];
      const value = target[key];
      return [key, value];
    }
    return [null, []];
  }


  // keys: [statement, a]
  // input:
  //   [
  //     { statement: [ {a: 1 } ] },
  //     { statement: [ {b: 1 } ] },
  //     { statement: [ {a: 2 } ] },
  //   ]
  // output:
  //   [
  //     { statement: [ {a: 1 } ] },
  //     { statement: [ {a: 2 } ] },
  //   ]
  public static filterRootByKeys(keys: string[], input: TArray): TArray {
    const results: TArray = [];
    if (keys.length <= 0) return results;

    const key = keys[0];
    for (let i = 0; i < input.length; i++) {
      const element = input[i];
      if (typeof element === 'object' && key in element) {
        const v = element[key];
        if (this.isMatchedRoot(keys.slice(1), v)) {
          results.push(element)
        }
      }
    }

    return results;
  }

  private static isMatchedRoot(keys: string[], input: TArray): boolean {
    if (keys.length <= 0) return true;

    const key = keys[0];
    for (let i = 0; i < input.length; i++) {
      const element = input[i];

      if (typeof element === 'object' && key in element) {
        const v = element[key];
        if (this.isMatchedRoot(keys.slice(1), v)) {
          return true;
        }
      }
    }

    return false;
  }
}