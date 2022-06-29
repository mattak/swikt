import {SwiftKotlinConverter} from "../SwiftKotlinConverter.ts";
import {TArray, TObject} from "../../util/Tree.ts";
import {TreeWalk} from "../../util/TreeWalk.ts";

// export function convert_controlTransferStatement__statements(self: SwiftKotlinConverter, path: string[], input: TArray): TObject {
//   return input.flatMap(x => {
//     const [key, elements] = TreeWalk.firstKeyValueOrNull(x);
//     if (!key) return [];
//     switch(key) {
//       case 'return_statement': {
//         return convert_returnStatement__statements(self, [...path, 'return_statement'], elements);
//       }
//       // case 'throw_statement': {
//       //   return self.convert_throwStatement__statements(self, [...path, 'throw_statement'], elements);
//       // }
//       default: {
//         return [];
//       }
//     }
//   });
// }