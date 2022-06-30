import { TArray, TArrayElement, TObject } from "../../util/Tree.ts";
import { SwiftKotlinConverter } from "../SwiftKotlinConverter.ts";
import { TreeWalk } from "../../util/TreeWalk.ts";
import { convert_expression__expression } from "../expressions/expresssion.ts";
import { convert_pattern__variableDeclaration } from "../patterns/pattern.ts";

export function convert_constantDeclaration__propertyDeclarations(
  self: SwiftKotlinConverter,
  path: string[],
  input: TArray,
): TObject[] {
  const initializerList = TreeWalk.firstArrayOrNullByKeys([
    "pattern_initializer_list",
  ], input);
  if (!initializerList) return [];
  return initializerList.flatMap((x: TArrayElement) => {
    const [key, elements] = TreeWalk.firstKeyValueOrNull(x);
    if (!key) return [];
    return [
      convert_patternInitializer__propertyDeclaration(self, [
        ...path,
        "pattern_initializer",
      ], elements),
    ];
  });
}

export function convert_patternInitializer__propertyDeclaration(
  self: SwiftKotlinConverter,
  path: string[],
  input: TArray,
): TObject {
  const pattern = TreeWalk.firstArrayOrNullByKeys(["pattern"], input);
  if (!pattern) return {};
  const variableDeclaration = convert_pattern__variableDeclaration(self, [
    ...path,
    "pattern",
  ], pattern);
  if (!variableDeclaration) return {};

  const expression = TreeWalk.firstArrayOrNullByKeys([
    "initializer",
    "expression",
  ], input);
  if (!expression) return {};

  const resultExpression = convert_expression__expression(self, [
    ...path,
    "initializer",
    "expression",
  ], expression);
  return {
    "propertyDeclaration": [
      "val",
      variableDeclaration,
      "=",
      resultExpression,
    ],
  };
}
