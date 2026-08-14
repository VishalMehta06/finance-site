import Banner from "./Banner"
import CourseSelection from "./CourseSelection";

function Home() {
    return (
        <>
        <div className="bg-bg">
            <Banner/>
            <hr className="my-8 h-0.5 border-0 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70" />
            <div className="mr-35 ml-35">
                <CourseSelection/>
            </div>
        </div>
        </>
    )
}

export default Home;