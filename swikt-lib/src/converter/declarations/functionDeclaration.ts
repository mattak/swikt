import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TArray, TObject} from "../../util/Tree.ts";
import {createSimpleIdentifier} from "../util/identifier.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";

export function convert_functionDeclaration__functionDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const name = TreeWalk.firstElementOrNullByKeys(["function_declaration", "function_name", "identifier"], input);
  const functionValueParameters = convert_functionSignature__functionValueParameter(self, path, input);
  const functionBody = convert_functionBody__functionBody(self, path, input);

  return {
    "functionDeclaration": [
      "fun",
      createSimpleIdentifier(name ?? ''),
      functionValueParameters,
      functionBody,
    ]
  }
}

export function convert_functionSignature__functionValueParameter(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  return {
    "functionValueParameters": [
      "(",
      ")"
    ]
  };
}

export function convert_functionBody__functionBody(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  return {
    "functionBody": [
      {
        "block": [
          "{",
          "",
          {
            "statements": []
          },
          "}"
        ]
      }
    ]
  };
}