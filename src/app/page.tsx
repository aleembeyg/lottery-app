"use client";
import styles from "./page.module.css";
import { IoMenu } from "react-icons/io5";
import PoolPanel from "@/component/poolPanel";
import { useState } from "react";

export default function Home() {
  const [showZoomOf, setShowZoomOF] = useState("");

  const cosmicData = [
    { value: "15", state: "" },
    { value: "23", state: "" },
    { value: "30", state: "" },
    { value: "43", state: "" },
    { value: "61", state: "" },
    { value: "6", state: "selected" },
  ];
  const atomicData = [
    { value: "0", state: "selected" },
    { value: "4", state: "selected" },
    { value: "6", state: "selected" },
    { value: "1", state: "selected" },
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <IoMenu />
        <h1>Lottery</h1>
      </header>
      <h2>Latest Results</h2>
      <section>
        {showZoomOf != "Cosmic" && (
          <PoolPanel
            backgroundClass="pinkbg"
            title="Cosmic"
            data={cosmicData}
            itemsList={[]}
            count={"2123425"}
            winingPool={"989,889,778"}
            setShowZoomOF={setShowZoomOF}
          />
        )}
        {showZoomOf != "" && (
          <PoolPanel
            backgroundClass="bluebg"
            title="Classic"
            data={[]}
            itemsList={[
              {
                name: "9089000",
                number: "99 99 999 999 9999",
                value: "178,553,366,90",
              },
              {
                name: "9089000",
                number: "99 99 999 999 9999",
                value: "178,553,366,90",
              },
              {
                name: "9089000",
                number: "99 99 999 999 9999",
                value: "178,553,366,90",
              },
            ]}
            count={""}
            winingPool={""}
            setShowZoomOF={setShowZoomOF}
          />
        )}
        {showZoomOf != "Atomic" && (
          <PoolPanel
            backgroundClass="frozeebg"
            title="Atomic"
            data={atomicData}
            count={"887999"}
            itemsList={[]}
            winingPool={"470,88"}
            setShowZoomOF={setShowZoomOF}
          />
        )}
      </section>
    </main>
  );
}
