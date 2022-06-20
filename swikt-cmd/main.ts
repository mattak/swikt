#!/usr/bin/env deno
import {transpileSwiftToKotlin} from "../swikt-lib/src/main.ts";
import {KotlinInfoTable} from "../swikt-lib/src/converter/SwiftKotlinConverter.ts";

async function readAllFromStdin(): Promise<string> {
  return new TextDecoder().decode(await Deno.readAll(Deno.stdin));
}

async function main() {
  const table: KotlinInfoTable = {
    package: "com.example.sample",
    importList: [], // e.g. ['io.github.Token', 'com.example.Test']
  }
  const swiftCode = await readAllFromStdin();
  const result = transpileSwiftToKotlin(swiftCode, table);
  console.log(result);
}

main().then().catch(e => console.error(e));
