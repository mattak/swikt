import {createTObject, isTObject} from "../../src/util/Tree.ts";
import {assertEquals, assertThrows} from "https://deno.land/std@0.143.0/testing/asserts.ts";

Deno.test('isTObject', () => {
  assertEquals(isTObject({}), true);
  assertEquals(isTObject({a: []}), true);
  assertEquals(isTObject([]), false);
  assertEquals(isTObject(null), false);
  assertEquals(isTObject('string'), false);
});

Deno.test('createTObject', () => {
  assertThrows(() => {
    createTObject([], ['inner']);
  });
  assertEquals(createTObject(['a'], ['inner']), {a: ['inner']});
  assertEquals(createTObject(['a', 'b', 'c'], ['inner']), {
    a: [
      {
        b: [
          {
            c: ['inner']
          }
        ]
      }
    ]
  });
});
