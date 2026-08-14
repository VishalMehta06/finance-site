import constructionWorkers from "../../assets/construction-workers.svg"
import steppingUp from "../../assets/stepping-up.svg"
import savings from "../../assets/savings.svg"

const courses = [
    { title: "Foundation", href: "/foundation", picture: constructionWorkers },
    { title: "Cash Flow", href: "/cash-flow", picture: steppingUp },
    { title: "Saving and Investing", href: "/saving-and-investing", picture: savings },
];

function CourseSelection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 pt-5 pb-20">
            {courses.map((course, index) => (
                <a key={index} href={course.href}>
                    <div className="flex flex-col items-center h-75 pt-20 pb-10 bg-panel rounded-xl border border-border shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                        <img src={course.picture} className="w-42 h-42" alt={course.title} />
                        <h2 className="mt-auto text-2xl font-bold">{course.title}</h2>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default CourseSelection;