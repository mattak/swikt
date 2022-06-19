import {TArray, TObject} from "../util/Tree";

export type Converter<TSelf> = (self: TSelf, tree: string[], input: TArray) => TObject;
