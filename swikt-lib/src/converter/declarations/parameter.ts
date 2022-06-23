import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";
import {convert_type__type_} from "../types/type.ts";
import {createSimpleIdentifier} from "../util/identifier.ts";

export function convert_parameter_parameter(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
  const name = TreeWalk.firstElementOrNullByKeys(['local_parameter_name', 'identifier'], input) ?? '__UNDEFINED__';
  const type = TreeWalk.firstArrayOrNullByKeys(['type_annotation', 'type'], input) ?? [];

  return {
    "parameter": [
      createSimpleIdentifier(name),
      ":",
      convert_type__type_(self, [...path, 'type_annotation', 'type'], type),
    ]
  };
}
