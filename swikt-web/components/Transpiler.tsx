import {NextPage} from "next";
import {useState} from "react";
import styles from "./Transpiler.module.css";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist/editor.css";
import {parseKotlin, parseSwift} from 'swikt-lib';

const CodeEditor = dynamic(
  // @ts-ignore
  () => import("@uiw/react-textarea-code-editor/dist/editor").then((mod) => mod.default),
  {ssr: false}
);

const Transpiler: NextPage = () => {
  const [swiftCode, setSwiftCode] = useState(`import Foundation

struct Sample {
}`);
  const [kotlinCode, setKotlinCode] = useState(`
com.example.test

class Sample() {
}
`);
  function transpileSwiftCode(value: string): string {
    console.log('parseSwift', parseSwift);
    const tree = parseSwift(value);
    return JSON.stringify(tree, null, 2);
  }
  function transpileKotlinCode(value: string): string {
    console.log('parseKotlin', parseKotlin);
    const tree = parseKotlin(value);
    return JSON.stringify(tree, null, 2);
  }

  function updateSwiftCode(value: string) {
    const result = transpileSwiftCode(value);
    console.log(result);
  }

  function updateKotlinCode(value: string) {
    const result = transpileKotlinCode(value);
    console.log(result);
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
          onChange={(e: any) => updateSwiftCode(e.target.value)}
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
