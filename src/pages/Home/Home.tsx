import Banner from "./Banner"
import CourseSelection from "./CourseSelection";

function Home() {
    return (
        <>
        <div className="bg-bg">
            <Banner/>
            <hr className="mx-10 my-12 border-0 border-t border-border"></hr>
            <div className="mr-35 ml-35">
                <CourseSelection/>
            </div>
        </div>
        </>
    )
}

export default Home;