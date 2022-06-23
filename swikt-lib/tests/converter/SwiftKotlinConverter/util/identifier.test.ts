import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";
import {createSimpleIdentifier} from "../../../../src/converter/util/identifier.ts";
import {createIdentifier} from "../../../../src/converter/util/identifier.ts";

Deno.test("createSimpleIdentifier", () => {
  assertEquals(createSimpleIdentifier("sample"), {
    "simpleIdentifier": [
      "sample",
    ],
  });
});

Deno.test("createIdentifier", () => {
  assertEquals(createIdentifier("com.example.sample"), {
    "identifier": [
      {
        "simpleIdentifier": [
          "com"
        ]
      },
      ".",
      {
        "simpleIdentifier": [
          "example"
        ]
      },
      ".",
      {
        "simpleIdentifier": [
          "sample"
        ]
      }
    ],
  });
});