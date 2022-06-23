import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TArray, TObject} from "../../util/Tree.ts";
import {createSimpleIdentifier} from "../util/identifier.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";

export function convert_functionDeclaration__functionDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const name = TreeWalk.firstElementOrNullByKeys(["function_declaration", "function_name", "identifier"], input);

  return {
    "functionDeclaration": [
      "fun",
      createSimpleIdentifier(name ?? ''),
    ]
  }
}
