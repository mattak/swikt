export type TElement = string;
export type TObject = { [key: string]: TArray }
export type TArrayElement = TElement | TObject
export type TArray = TArrayElement[]
