import {Converter} from "./Converter";
import {TArray, TObject} from "../util/Tree";

export class AbstractConverter<TConverter extends Converter<any>> {
  getConverter(key: string): TConverter | null {
    return null;
  }

  visitObject(tree: string[], input: TObject): TObject {
    let result: TObject = {};
    for (let key of Object.keys(input)) {
      tree.push(key);
      const element = input[key];
      if (Array.isArray(element)) {
        const converter = this.getConverter(key) ?? this.visitArray;
        result = {
          ...result,
          ...converter(this, tree, element),
        };
      }
      tree.pop();
    }
    return result;
  }

  visitArray(tree: string[], input: TArray): TObject {
    if (tree.length < 1) return {}
    const key = tree[tree.length - 1];
    const result: TArray = [];
    for (let element of input) {
      if (typeof element === "string") {
        result.push(element);
      } else if (typeof element === 'object') {
        result.push(this.visitObject(tree, element));
      }
    }
    return {
      key: result
    };
  }
}
