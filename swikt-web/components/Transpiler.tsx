import {NextPage} from "next";
import {useState} from "react";
import styles from "./Transpiler.module.css";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist/editor.css";
import {Calculator} from "swikt-lib";

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor/dist/editor").then((mod) => mod.default),
  {ssr: false}
);

const Transpiler: NextPage = () => {
  const [swiftCode, setSwiftCode] = useState(`import Foundation

struct Sample {
}`);
  const [kotlinCode, setKotlinCode] = useState('');
  const a = new Calculator();
  console.log('calc', a.add(1,2));

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <label className={styles.codeLabel}>swift</label>
        <CodeEditor
          value={swiftCode}
          language="swift"
          placeholder="Please enter Swift code."
          onChange={(e: any) => setSwiftCode(e.target.value)}
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
          value={kotlinCode}
          language="kotlin"
          placeholder="Please enter Kotlin code."
          onChange={(e: any) => setKotlinCode(e.target.value)}
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
