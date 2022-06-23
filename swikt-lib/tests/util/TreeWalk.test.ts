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

Deno.test('TreeWalk.hasKey', () => {
  assertEquals(TreeWalk.hasKey('a',{'a': []}), true);
  assertEquals(TreeWalk.hasKey('a',{'b': []}), false);
});

Deno.test('TreeWalk.getArrayOrNull', () => {
  assertEquals(TreeWalk.getArrayOrNull('a', {}), null);
  assertEquals(TreeWalk.getArrayOrNull('a', {'a': [{'b': []}]}), [{'b': []}]);
});
Deno.test('TreeWalk.firstArrayOrNullByKeys', () => {
  assertEquals(TreeWalk.firstArrayOrNullByKeys(['a'], []), null);
  assertEquals(TreeWalk.firstArrayOrNullByKeys(['a'], [{'a': []}]), []);
  assertEquals(TreeWalk.firstArrayOrNullByKeys(['b'], [{'a': []}]), null);
  assertEquals(TreeWalk.firstArrayOrNullByKeys(['a', 'b'], [
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
  ]), [{'c': []}]);
  assertEquals(TreeWalk.firstArrayOrNullByKeys(['a3'], [
    {'a1': []},
    {'a2': []},
  ]), null);
  assertEquals(TreeWalk.firstArrayOrNullByKeys(['a2'], [
    {'a1': []},
    {'a2': []},
  ]), []);
  assertEquals(TreeWalk.firstArrayOrNullByKeys(['a', 'b2'], [
    {
      'a': [
        {'b1': [{'c': []}]},
        {'b2': [{'c': []}]},
      ],
    },
  ]), [{'c': []}]);
  assertEquals(TreeWalk.firstArrayOrNullByKeys(['a', 'b2', 'c'], [
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
  ]), [{'d2': []}]);
});
Deno.test('TreeWalk.firstElementOrNullByKeys', () => {
  assertEquals(TreeWalk.firstElementOrNullByKeys(['a', 'b'], [
      {
        'a': [
          {
            'b':
              [
                'c'
              ]
          }
        ]
      }
    ]),
    'c'
  );
  assertEquals(TreeWalk.firstElementOrNullByKeys(['a', 'd'], [
      {
        'a': [
          {
            'b':
              [
                'c'
              ]
          }
        ]
      }
    ]),
    null
  );
  assertEquals(TreeWalk.firstElementOrNullByKeys(['a', 'b'], [
      {
        'a': [
          {
            'b':
              [
                {
                  'c': []
                }
              ]
          }
        ]
      }
    ]),
    null
  );
});
Deno.test('TreeWalk.firstKeyValueOrNull', () => {
  assertEquals(TreeWalk.firstKeyValueOrNull({}), [null, []]);
  assertEquals(TreeWalk.firstKeyValueOrNull({'a': []}), ['a', []]);
  assertEquals(TreeWalk.firstKeyValueOrNull({'a': [], 'b': []}), ['a', []]);
});