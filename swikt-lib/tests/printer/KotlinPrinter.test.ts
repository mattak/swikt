import {KotlinPrinter} from "../../src/printer/KotlinPrinter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const printer = new KotlinPrinter();

Deno.test('KotlinPrinter.hasKeysInObject true', () => {
  const input = {
    postfixUnarySuffix: [
      {
        callSuffix: [
          {
            annotatedLambda: [
              {
                lambdaLiteral: [
                  '{',
                  '',
                  '}'
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const keys = ['postfixUnarySuffix', 'callSuffix', 'annotatedLambda'];
  assertEquals(printer.hasKeysInObject(input, keys), true);
});

Deno.test('KotlinPrinter.hasKeysInObject false', () => {
  const input = {
    postfixUnarySuffix: [
      {
        callSuffix: [
          {
            valueArguments: [
              '(',
              ')'
            ]
          }
        ]
      }
    ]
  };
  const keys = ['postfixUnarySuffix', 'callSuffix', 'annotatedLambda'];
  assertEquals(printer.hasKeysInObject(input, keys), false);
});