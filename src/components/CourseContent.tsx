import React from "react";
import { Link } from "react-router-dom";

export interface Article {
    articleName: string;
    articleRef: string;
}

export interface Module {
    moduleName: string;
    moduleRef: string;
    articles: Article[];
}

export interface ContentTable {
    content: Module[];
}

const CourseContent: React.FC<ContentTable> = ({ content }) => {
    return (
        <div className="space-y-8">
            {content.map((module) => (
                <section
                    key={module.moduleName}
                    className="overflow-hidden rounded-xl border border-border bg-panel shadow-sm"
                >
                    {/* Module Header */}
                    <div className="flex items-center border-b border-border px-6 py-4">
                        <div className="mr-3 h-6 w-1 rounded-full bg-accent-strong" />

                        <h2 className="text-xl font-semibold text-text">
                            {module.moduleName}
                        </h2>
                    </div>

                    {/* Articles */}
                    <ul className="divide-y divide-border">
                        {module.articles.map((article) => (
                            <li key={article.articleRef}>
                                <Link
                                    to={`${module.moduleRef}/${article.articleRef}`}
                                    className="
                                        group flex items-center
                                        px-6 py-3.5
                                        text-text
                                        transition-colors
                                        hover:bg-panel-2/10
                                    "
                                >
                                    <span className="mr-3 text-muted transition-transform duration-200 group-hover:translate-x-1">
                                        →
                                    </span>

                                    <span className="font-medium">
                                        {article.articleName}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
};

export default CourseContent;
