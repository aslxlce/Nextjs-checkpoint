import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>My Portfolio</title>
            </Head>
            <Navbar />
            <div className={styles.container}>
                <h1>Welcome to My Portfolio</h1>
                <Image src="/goku.jpg" alt="Profile Picture" width={200} height={200} />
                <p>Hi, I'm a web developer passionate about building modern web applications.</p>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            message: "This page is rendered server-side!",
        },
    };
}
