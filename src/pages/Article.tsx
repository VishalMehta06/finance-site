import { useParams, useNavigate } from "react-router-dom";
import { articles } from "../articles";
import { courses } from "../courses";
import { getArticleNavigation } from "../utils/ArticleNavigation";

function Article() {
    const { course, module, article } = useParams();
    const navigate = useNavigate();

    if (!course || !module || !article) {
        return <h1>Article not found</h1>;
    }

    // Find the article component using the URL
    const articleKey = `${course}/${module}/${article}`;

    const ArticleContent =
        articles[articleKey as keyof typeof articles];

    if (!ArticleContent) {
        return (
            <div className="min-h-screen content-center text-center">
                <h1 className="text-3xl text-error font-bold">
                    Article not found
                </h1>

                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="py-3 px-5 my-10 rounded-xl cursor-pointer bg-panel-2 text-text-2"
                >
                    Go Back
                </button>
            </div>
        );
    }

    // Find the course
    const courseData = courses[course as keyof typeof courses];

    if (!courseData) {
        return (
            <div className="min-h-screen content-center text-center">
                <h1 className="text-3xl text-error font-bold">
                    Course not found
                </h1>

                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="py-3 px-5 my-10 rounded-xl cursor-pointer bg-panel-2 text-text-2"
                >
                    Go Back
                </button>
            </div>
        );
    }

    // Flatten the course structure into navigation order
    const navigation = getArticleNavigation(courseData.content);

    // Find the current article
    const currentIndex = navigation.findIndex(
        item =>
            item.moduleRef === module &&
            item.articleRef === article
    );

    const previousArticle = navigation[currentIndex - 1];
    const nextArticle = navigation[currentIndex + 1];

    // Build paths
    const previousPath = previousArticle
        ? `/${course}/${previousArticle.moduleRef}/${previousArticle.articleRef}`
        : null;

    const nextPath = nextArticle
        ? `/${course}/${nextArticle.moduleRef}/${nextArticle.articleRef}`
        : null;

    return (
        <div className="relative">
            {/* Previous article / Course */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 w-12">
                <button
                    type="button"
                    onClick={() =>
                        previousPath
                            ? navigate(previousPath)
                            : navigate(`/${course}`)
                    }
                    className="
                        w-16 h-20
                        flex items-center justify-center
                        rounded-xl
                        border border-border
                        bg-panel-2
                        text-text-2 text-4xl
                        shadow-sm
                        transition-all duration-200
                        hover:bg-panel-3
                        hover:shadow-md
                        hover:scale-105
                        active:scale-95
                        cursor-pointer
                    "
                    aria-label={
                        previousArticle
                            ? `Previous article: ${previousArticle.articleName}`
                            : "Back to course"
                    }
                    title={
                        previousArticle
                            ? previousArticle.articleName
                            : "Back to course"
                    }
                >
                    ←
                </button>
            </div>

            {/* Article */}
            <div className="mr-60 ml-60 py-10 min-h-screen">
                <ArticleContent />
            </div>

            {/* Next article */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 w-12">
                {nextPath && (
                    <button
                        type="button"
                        onClick={() => navigate(nextPath)}
                        className="
                            w-16 h-20
                            flex items-center justify-center
                            rounded-xl
                            border border-border
                            bg-panel-2
                            text-text-2 text-4xl
                            shadow-sm
                            transition-all duration-200
                            hover:bg-panel-3
                            hover:shadow-md
                            hover:scale-105
                            active:scale-95
                            cursor-pointer"
                        aria-label={`Next article: ${nextArticle.articleName}`}
                        title={nextArticle.articleName}
                    >
                        →
                    </button>
                )}
            </div>
        </div>
    );
}

export default Article;