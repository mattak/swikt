import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TArray, TArrayElement, TObject} from "../../util/Tree.ts";
import {createSimpleIdentifier} from "../util/identifier.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {convert_parameter_parameter} from "./parameter.ts";
import {joinObjectsWithComma} from "../util/join.ts";
import {convert_type__type_} from "../types/type.ts";

export function convert_functionDeclaration__functionDeclaration(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const _name = TreeWalk.firstElementOrNullByKeys(["function_name", "identifier"], input);
  const _parameterClause = TreeWalk.firstArrayOrNullByKeys(['function_signature', 'parameter_clause'], input);
  const _functionResult = TreeWalk.firstArrayOrNullByKeys(['function_signature', 'function_result'], input);

  const functionValueParameters = _parameterClause ? convert_parameterClause__functionValueParameters(self, [...path, 'function_signature', 'parameter_clause'], _parameterClause) : {};
  const functionBody = convert_functionBody__functionBody(self, path, input);
  const functionResultType: TObject = _functionResult ? convert_functionResult__type(self, [...path, 'function_signature', 'function_result'], _functionResult) : {};

  return {
    "functionDeclaration": [
      "fun",
      createSimpleIdentifier(_name ?? ''),
      functionValueParameters,
      ...(TreeWalk.isEmptyObject(functionResultType) ? [] : [':', functionResultType]),
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

export function convert_functionResult__type(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const type = TreeWalk.firstArrayOrNullByKeys(['type'], input);
  if (!type) return {};
  return convert_type__type_(self, [...path, 'type'], type);
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