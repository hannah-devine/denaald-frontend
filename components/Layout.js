import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>De Naald</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/">
            <a>De Naald</a>
          </Link>
        </h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
