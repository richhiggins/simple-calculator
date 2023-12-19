import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import Card from "app/components/card/card";

export default function Home() {
  const plants = [
    { title: "Tulip", theme: "pink" },
    { title: "Gebera", theme: "blue" },
    { title: "Orchid", theme: "green" },
  ];

  return (
    <div>
      <Head>
        <title>Your Herbarium</title>
        <link rel="icon" href="/favicon.ico" />
        {/* placeholder, probably a better way to handle webfont with Next.js */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Inter"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1 className={styles.heading1}>My plants</h1>

        <ul className={styles.unstyledList}>
          {plants.map((plant) => (
            <li key={plant.title}>
              <Card title={plant.title} theme={plant.theme} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
