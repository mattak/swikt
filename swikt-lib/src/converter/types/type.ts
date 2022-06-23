import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {createGenericUserType, createPlainUserType} from "../util/type.ts";

export function convert_type__type_(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  if (input.length < 0) return {}

  const [key, elements] = TreeWalk.firstKeyValueOrNull(input[0])
  switch (key) {
    case 'array_type': {
      return convert_arrayType__type_(self, [...path, 'array_type'], elements)
    }
    // normal type
    case 'protocol_composition_type': {
      return convert_protocolCompositionType__type_(self, [...path, 'protocol_composition_type'], elements)
    }
    default: {
      return {}
    }
  }
}

export function convert_protocolCompositionType__type_(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const name = TreeWalk.firstElementOrNullByKeys(['type_identifier', 'type_name', 'identifier'], input);
  return createPlainUserType(name ?? '__UNDEFINED__');
}

export function convert_arrayType__type_(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const name = TreeWalk.firstElementOrNullByKeys(['type', 'protocol_composition_type', 'type_identifier', 'type_name', 'identifier'], input);
  return createGenericUserType('List', createPlainUserType(name ?? ''));
}