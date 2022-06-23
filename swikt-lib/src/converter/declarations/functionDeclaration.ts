import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TArray, TArrayElement, TObject} from "../../util/Tree.ts";
import {createSimpleIdentifier} from "../util/identifier.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {convert_parameter_parameter} from "./parameter.ts";
import {joinObjectsWithComma} from "../util/join.ts";

export function convert_functionDeclaration__functionDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const name = TreeWalk.firstElementOrNullByKeys(["function_name", "identifier"], input);
  const parameterClause = TreeWalk.firstArrayOrNullByKeys(['function_signature', 'parameter_clause'], input);
  const functionValueParameters = parameterClause ? convert_parameterClause__functionValueParameters(self, [...path, 'function_signature', 'parameter_clause'], parameterClause) : {};
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

export function convert_parameterClause__functionValueParameters(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const parameters = TreeWalk.firstArrayOrNullByKeys(['parameter_list'], input);
  if (!parameters) return {
    "functionValueParameters": [
      "(",
      ")"
    ]
  };

  const functionValueParameterList = parameters.flatMap((x: TArrayElement) => {
    const element = TreeWalk.getArrayOrNull('parameter', x);
    if (element) return [convert_parameter__functionValueParameter(self, [...path, 'parameter_list', 'parameter'], element)];
    return []
  });
  const functionValueParameterListWithComma = joinObjectsWithComma(functionValueParameterList);

  return {
    "functionValueParameters": [
      "(",
      ...functionValueParameterListWithComma,
      ")"
    ]
  };
}

export function convert_parameter__functionValueParameter(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  return {
    "functionValueParameter": [
      convert_parameter_parameter(self, path, input),
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