import {TreeWalk} from "../../src/util/TreeWalk.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

Deno.test('TreeWalk.isEmptyArray', () => {
  assertEquals(TreeWalk.isEmptyArray([]), true);
  assertEquals(TreeWalk.isEmptyArray(['a']), false);
  assertEquals(TreeWalk.isEmptyArray([{}]), false);
})

Deno.test('TreeWalk.isEmptyObject', () => {
    assertEquals(TreeWalk.isEmptyObject({}), true);
    assertEquals(TreeWalk.isEmptyObject({'a': []}), false);
    assertEquals(TreeWalk.isEmptyObject({'a': [], 'b': []}), false);
});
Deno.test('TreeWalk.getArrayOrNull', () => {
    assertEquals(TreeWalk.getArrayOrNull('a', {}),null);
    assertEquals(TreeWalk.getArrayOrNull('a', {'a': [{'b': []}]}),[{'b': []}]);
});
Deno.test('TreeWalk.getArrayOrNullByKeys', () => {
    assertEquals(TreeWalk.getArrayOrNullByKeys(['a'], []),null);
    assertEquals(TreeWalk.getArrayOrNullByKeys(['a'], [{'a': []}]),[]);
    assertEquals(TreeWalk.getArrayOrNullByKeys(['b'], [{'a': []}]),null);
    assertEquals(TreeWalk.getArrayOrNullByKeys(['a', 'b'], [
      {
        'a': [
          {
            'b': [
              {
                'c': [],
              }
            ]
          }
        ]
      },
    ]),[{'c': []}]);
    assertEquals(TreeWalk.getArrayOrNullByKeys(['a3'], [
      {'a1': []},
      {'a2': []},
    ]),null);
    assertEquals(TreeWalk.getArrayOrNullByKeys(['a2'], [
      {'a1': []},
      {'a2': []},
    ]),[]);
    assertEquals(TreeWalk.getArrayOrNullByKeys(['a', 'b2'], [
      {
        'a': [
          {'b1': [{'c': []}]},
          {'b2': [{'c': []}]},
        ],
      },
    ]),[{'c': []}]);
    assertEquals(TreeWalk.getArrayOrNullByKeys(['a', 'b2', 'c'], [
      {
        'a': [
          {
            'b1': [
              {
                'c': [
                  {'d1': []}
                ],
              }
            ]
          },
          {
            'b2': [
              {
                'c': [
                  {'d2': []}
                ],
              }
            ]
          }
        ]
      },
    ]),[{'d2': []}]);
});
Deno.test('TreeWalk.getFirstOrNull', () => {
    assertEquals(TreeWalk.getFirstOrNull({}), [null, []]);
    assertEquals(TreeWalk.getFirstOrNull({'a': []}), ['a', []]);
    assertEquals(TreeWalk.getFirstOrNull({'a': [], 'b': []}), ['a', []]);
});