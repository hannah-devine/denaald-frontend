import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ data }) {
  return (
    <Layout>
      <div className={styles.grid}>
        {data.map((articles) => (
          <Link href="https://nextjs.org/docs">
            <a className={styles.card}>
              <h3>{articles.title} &rarr;</h3>
              <p>{articles.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

// ik wil alle posts
export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?_sort=id:desc`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
