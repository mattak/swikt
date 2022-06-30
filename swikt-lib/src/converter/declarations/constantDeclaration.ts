import {TArray, TArrayElement, TObject} from "../../util/Tree.ts";
import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {convert_expression__expression} from "../expressions/expresssion.ts";

export function convert_constantDeclaration__propertyDeclarations(self: SwiftKotlinConverter, path: string[], input: TArray): TObject[] {
  const initializerList = TreeWalk.firstArrayOrNullByKeys(['pattern_initializer_list'], input);
  if (!initializerList) return [];
  return initializerList.flatMap((x: TArrayElement) => {
    const [key, elements] = TreeWalk.firstKeyValueOrNull(x)
    if (!key) return [];
    return [convert_patternInitializer__propertyDeclaration(self, [...path, 'pattern_initializer'], elements)];
  });
}

export function convert_patternInitializer__propertyDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const name = TreeWalk.firstElementOrNullByKeys(['pattern', 'identifier_pattern', 'identifier'], input) ?? '';
  const expression = TreeWalk.firstArrayOrNullByKeys(['initializer', 'expression'], input);
  if (!expression) return {};

  const resultExpression = convert_expression__expression(self, [...path, 'initializer', 'expression'], expression);
  return {
    "propertyDeclaration": [
      "val",
      {
        "variableDeclaration": [
          {
            "simpleIdentifier": [
              name
            ]
          }
        ]
      },
      "=",
      resultExpression,
    ]
  };
}