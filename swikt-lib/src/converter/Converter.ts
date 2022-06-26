import {TArray, TObject} from "../util/Tree.ts";

export type Converter<TSelf> = (self: TSelf, tree: string[], input: TArray) => TObject[];
