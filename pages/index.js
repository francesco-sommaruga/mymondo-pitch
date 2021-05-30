import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AnimatePresence } from "framer-motion";

import Title from "../components/Title";
import Video from "../components/Video";

export default function Home() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 6000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pitch - MYmondo</title>
        <meta name="description" content="Created by MYmondo" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <AnimatePresence>
          {visible ? (
            <Video key="video" />
          ) : (
            <Title key="titolo" setVisible={setVisible} />
          )}
        </AnimatePresence>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.mymondo.yoga/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Logo.png"
            alt="Vercel Logo"
            width={125}
            height={46.665}
          />
        </a>
      </footer>
    </div>
  );
}
