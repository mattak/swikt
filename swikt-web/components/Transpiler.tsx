import {NextPage} from "next";
import {useState} from "react";
import styles from "./Transpiler.module.css";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist/editor.css";
import {convertSwiftTreeToKotlinTree, parseKotlin, parseSwift, preprocessSwiftTree, printKotlin} from "swikt-lib";
import {KotlinInfoTable} from "swikt-lib/converter/SwiftKotlinConverter";

const CodeEditor = dynamic(
  // @ts-ignore
  () => import("@uiw/react-textarea-code-editor/dist/editor").then((mod) => mod.default),
  {ssr: false}
);

const Transpiler: NextPage = () => {
  const [swiftCode, setSwiftCode] = useState(`import Foundation

struct Sample {
  static func build(args: [String], count: Int) {
  }
}`);
  const [kotlinCode, setKotlinCode] = useState(`package com.example.test

class Sample() {
}
`);
  const [swiftTreeCode, setSwiftTreeCode] = useState(`{}`);
  const [kotlinTreeCode, setKotlinTreeCode] = useState(`{}`);
  const kotlinInfo: KotlinInfoTable = {
    package: 'com.example.sample',
    importList: ['com.example.Test'],
  };

  function updateSwiftCodeToKotlinCode(swiftCode: string) {
    const swiftTree = preprocessSwiftTree(parseSwift(swiftCode));
    setSwiftTreeCode(JSON.stringify(swiftTree, null, 2));
    const kotlinTree = convertSwiftTreeToKotlinTree(swiftTree, kotlinInfo);
    setKotlinTreeCode(JSON.stringify(kotlinTree, null, 2));
    const newKotlinCode = printKotlin(kotlinTree);
    setKotlinCode(newKotlinCode);
  }

  function updateKotlinCode(kotlinCode: string) {
    const kotlinTree = parseKotlin(kotlinCode);
    setKotlinTreeCode(JSON.stringify(kotlinTree, null, 2));
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <label className={styles.codeLabel}>swift</label>
        <CodeEditor
          // @ts-ignore
          value={swiftCode}
          language="swift"
          placeholder="Please enter Swift code."
          onChange={(e: any) => updateSwiftCodeToKotlinCode(e.target.value)}
          padding={15}
          style={{
            fontSize: 12,
            backgroundColor: "#FAFAFA",
            width: "100%",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
          }}
        />
      </div>

      <div className={styles.item}>
        <details>
          <summary>swift ast</summary>
          <CodeEditor
            // @ts-ignore
            value={swiftTreeCode}
            language="json"
            padding={15}
            style={{
              fontSize: 12,
              backgroundColor: "#FAFAFA",
              width: "100%",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </details>
      </div>

      <div className={styles.item}>
        <details>
          <summary>kotlin ast</summary>
          <CodeEditor
            // @ts-ignore
            value={kotlinTreeCode}
            language="json"
            padding={15}
            style={{
              fontSize: 12,
              backgroundColor: "#FAFAFA",
              width: "100%",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </details>
      </div>

      <div className={styles.item}>
        <label className={styles.codeLabel}>kotlin</label>
        <CodeEditor
          // @ts-ignore
          value={kotlinCode}
          language="kotlin"
          placeholder="Please enter Kotlin code."
          onChange={(e: any) => updateKotlinCode(e.target.value)}
          padding={15}
          style={{
            fontSize: 12,
            backgroundColor: "#FAFAFA",
            width: "100%",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </div>
    </div>
  )
}

export default Transpiler;
