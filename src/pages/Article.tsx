import { useParams, useNavigate } from "react-router-dom";
import { articles } from "../articles";

function Article() {
    const { course, module, article } = useParams();
    const navigate = useNavigate();

    if (!course || !module || !article) {
        return <h1>Article not found</h1>;
    }

    const articleKey = `${course}/${module}/${article}`;

    const ArticleContent =
        articles[articleKey as keyof typeof articles];

    if (!ArticleContent) {
        return (
        <div className="min-h-screen content-center text-center">
            <h1 className="text-3xl text-error font-bold">Article not found</h1>
            <button type="button" onClick={() => navigate(-1)} className="py-3 px-5 my-10 rounded-xl cursor-pointer bg-panel-2 text-text-2">
                Go Back
            </button>
        </div>
        );
    }

    return (
        <div className="mr-60 ml-60 py-10 min-h-screen">
            <ArticleContent />
        </div>
    );
}

export default Article;