import {TArray, TArrayElement, TObject} from "../../util/Tree.ts";

export function joinObjectsWithComma(objs: TArrayElement[]): TArrayElement[] {
  if (objs.length < 1) return [];
  if (objs.length === 1) return objs;

  const results: TArrayElement[] = [objs[0]];
  for (let i = 1; i< objs.length; i++) {
    results.push(",");
    results.push(objs[i]);
  }
  return results;
}