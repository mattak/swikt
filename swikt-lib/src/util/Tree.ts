export type TElement = string;
export type TObject = { [key: string]: TArray }
export type TArrayElement = TElement | TObject
export type TArray = TArrayElement[]

export const isTObject = (x: unknown) => {
  if (x === null) return false;
  if (typeof x !== 'object') return false;
  if (Array.isArray(x)) return false;
  return true;
}

export function createTObject(keys: string[], innerArray: TArray): TObject {
  if (keys.length === 0) throw new Error('ERROR: createTObject failed with keys.length === 0');

  let result: TObject = {}
  result[keys[keys.length - 1]] = innerArray;

  for (let i = keys.length - 2; i >= 0; i--) {
    const key = keys[i];
    const newResult: TObject = {}
    newResult[key] = [result];
    result = newResult;
  }

  return result;
}
