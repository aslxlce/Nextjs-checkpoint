import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Projects() {
    return (
        <>
            <Navbar />
            <h1>My Projects</h1>
            <div>
                <Image src="/react-logo.svg" alt="Project 1" width={300} height={200} />
                <p>Project 1: A web app built with React and Next.js.</p>
            </div>
            <div>
                <Image src="/imageee.jpg" alt="Project 2" width={300} height={200} />
                <p>Project 2: A mobile-responsive eCommerce site.</p>
            </div>
        </>
    );
}
