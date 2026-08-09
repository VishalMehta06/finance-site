import { useParams } from "react-router-dom";
import CourseContent from "../components/CourseContent";
import { courses } from "../courses";

function Course() {
    const { course } = useParams();

    const selectedCourse = course
        ? courses[course as keyof typeof courses]
        : undefined;

    if (!selectedCourse) {
        return <h1>Course not found</h1>;
    }

    return (
        <>
            <h1 className="text-4xl text-center pt-10">
                {selectedCourse.title}
            </h1>

            <div className="mr-60 ml-60 py-5">
                <CourseContent {...selectedCourse.content} />
            </div>
        </>
    );
}

export default Course;