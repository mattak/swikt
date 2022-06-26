import {Converter} from "./Converter.ts";
import {TArray, TObject} from "../util/Tree.ts";
import {TreeWalk} from "../util/TreeWalk.ts";

export class AbstractConverter<TConverter extends Converter<any>> {
  getConverter(key: string): TConverter | null {
    return null;
  }

  visit(path: string[], input: TArray): TObject[] {
    if (path.length <= 0) return [];
    const key = path[path.length - 1];
    const converter = this.getConverter(key);
    if (!converter) return [];
    return converter(this, path, input);
  }

  visitRoot(rootKey: string, input: TObject): TObject[] {
    const array = TreeWalk.getArrayOrNull(rootKey, input);
    if (!array) return [];
    return this.visit([rootKey], array);
  }

  // // deprecated
  // visitObject(path: string[], input: TObject): TObject {
  //   let result: TObject = {};
  //   for (let key of Object.keys(input)) {
  //     path.push(key);
  //     const element = input[key];
  //     if (Array.isArray(element)) {
  //       const converter = this.getConverter(key);
  //       if (converter) {
  //         result = {
  //           ...result,
  //           ...converter(this, path, element),
  //         };
  //       } else {
  //         result = {
  //           ...result,
  //           ...this.visitArray(path, element),
  //         };
  //       }
  //     }
  //     path.pop();
  //   }
  //   return result;
  // }
  //
  // // deprecated
  // visitArray(path: string[], input: TArray): TObject {
  //   if (path.length < 1) return {}
  //   const key = path[path.length - 1];
  //   const result: TArray = [];
  //   for (let element of input) {
  //     if (typeof element === "string") {
  //       result.push(element);
  //     } else if (typeof element === 'object') {
  //       result.push(this.visitObject(path, element));
  //     }
  //   }
  //   const obj: TObject = {};
  //   obj[key] = result;
  //   return obj;
  // }
}
