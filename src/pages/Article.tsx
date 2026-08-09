import { useParams } from "react-router-dom";
import { articles } from "../articles";

function Article() {
    const { course, module, article } = useParams();

    if (!course || !module || !article) {
        return <h1>Article not found</h1>;
    }

    const articleKey = `${course}/${module}/${article}`;

    const ArticleContent =
        articles[articleKey as keyof typeof articles];

    if (!ArticleContent) {
        return <h1>Article not found</h1>;
    }

    return (
        <div className="mr-60 ml-60 py-10">
            <ArticleContent />
        </div>
    );
}

export default Article;