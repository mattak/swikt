import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {joinObjectsWithComma} from "../../../../src/converter/util/join.ts";

Deno.test('joinObjsWithComma', () => {
  assertEquals(joinObjectsWithComma([]), []);
  assertEquals(joinObjectsWithComma([{}]), [{}]);
  assertEquals(joinObjectsWithComma([{}, {}]), [{}, ",", {}]);
  assertEquals(joinObjectsWithComma([{}, {}, {}]), [{}, ",", {}, ",", {}]);
});