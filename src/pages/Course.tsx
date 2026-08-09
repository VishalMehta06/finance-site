import { useParams, useNavigate } from "react-router-dom";
import CourseContent from "../components/CourseContent";
import { courses } from "../courses";

function Course() {
    const { course } = useParams();
    const navigate = useNavigate();

    const selectedCourse = course
        ? courses[course as keyof typeof courses]
        : undefined;

    if (!selectedCourse) {
        return (
        <div className="min-h-screen content-center text-center">
            <h1 className="text-3xl text-error font-bold">Course not found</h1>
            <button type="button" onClick={() => navigate(-1)} className="py-3 px-5 my-10 rounded-xl cursor-pointer bg-panel-2 text-text-2">
                Go Back
            </button>
        </div>
        );
    }

    return (
        <>
            <div className="min-h-screen">
                <h1 className="text-4xl text-center pt-10">
                    {selectedCourse.title}
                </h1>

                <div className="mx-60 py-20">
                    <CourseContent {...selectedCourse.content} />
                </div>
            </div>
        </>
    );
}

export default Course;