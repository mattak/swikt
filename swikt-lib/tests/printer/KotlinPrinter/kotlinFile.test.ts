import {KotlinPrinter} from "../../../src/printer/KotlinPrinter.ts";
import {assertEquals} from "https://deno.land/std@0.143.0/testing/asserts.ts";

const printer = new KotlinPrinter();

Deno.test('KotlinPrinter/kotlinFile', () => {
  const tree: string[] = [];
  const input = {
    kotlinFile: [
      {
        packageHeader: [
          'package',
          {
            identifier: [
              {simpleIdentifier: ['com']},
              '.',
              {simpleIdentifier: ['example']},
              '.',
              {simpleIdentifier: ['test']}
            ]
          },
          {semi: ['', '']}
        ]
      },
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, ["package com.example.test", '']);
});

/*
Deno.test("package", () => {
  const tree: string[] = [];
  const input = {
    packageHeader: [
      'package',
      {
        identifier: [
          {simpleIdentifier: ['com']},
          '.',
          {simpleIdentifier: ['example']},
        ]
      },
      {semi: ['', '']}
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, ["package com.example", '']);
});

Deno.test("importList", () => {
  const tree: string[] = [];
  const input = {
    importList: [
      {
        importHeader: [
          'import',
          {
            identifier: [
              {simpleIdentifier: ['com']},
              '.',
              {simpleIdentifier: ['example1']},
            ]
          },
          '.',
          '*',
          {semi: ['']}
        ]
      },
      {
        importHeader: [
          'import',
          {
            identifier: [
              {simpleIdentifier: ['com']},
              '.',
              {simpleIdentifier: ['example2']},
            ]
          },
          '.',
          '*',
          {semi: ['']}
        ]
      },
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, ["import com.example1.*", 'import com.example2.*', '']);
});

Deno.test("topLevelObject", () => {
  const tree: string[] = [];
  const input = {
    topLevelObject: [
      {
        declaration: [
          {
            classDeclaration: [
              'class',
              {simpleIdentifier: ['Hoge']},
              {
                primaryConstructor: [{classParameters: ['(', ')']}]
              },
              {
                classBody: ['{', {classMemberDeclarations: null}, '}']
              }
            ]
          }
        ]
      },
      {semis: ['']}
    ]
  };
  const output = printer.print(tree, input);
  assertEquals(output, ["class Hoge() {", '}', '']);
});
*/
