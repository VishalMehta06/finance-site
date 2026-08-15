import type { ContentTable } from "../components/CourseContent";

export function getArticleNavigation(content: ContentTable) {
    return content.content.flatMap(module =>
        module.articles.map(article => ({
            moduleRef: module.moduleRef,
            articleRef: article.articleRef,
            articleName: article.articleName,
        }))
    );
}
