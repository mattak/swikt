import {TObject} from "../../util/Tree.ts";

export function createIdentifier(name: string): TObject {
  const simpleIdentifiers = name.split('.').map(x => <TObject>{simpleIdentifier: [x]});
  const identifiers = [];
  for (let i = 0; i < simpleIdentifiers.length; i++) {
    identifiers.push(simpleIdentifiers[i]);
    if (i < simpleIdentifiers.length - 1) {
      identifiers.push('.');
    }
  }
  return {
    identifier: identifiers,
  };
}
