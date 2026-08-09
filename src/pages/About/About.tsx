import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function About() {
    return (
        <>
            <Navbar />

            <div className="mr-35 ml-35">
                <h1>About</h1>
                <p>Welcome to FinAdvisor.</p>
            </div>

            <Footer />
        </>
    );
}

export default About;