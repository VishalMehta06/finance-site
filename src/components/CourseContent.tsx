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
        <div>
            {content.map((module) => (
                <table
                    key={module.moduleName}
                    className="w-full my-12 border border-solid border-border"
                >
                    <thead className="border border-solid border-border">
                        <tr>
                            <th className="py-3 border border-solid border-border">
                                {module.moduleName}
                            </th>
                        </tr>
                    </thead>

                    <tbody className="border border-solid border-border">
                        {module.articles.map((article) => (
                            <tr key={article.articleRef}>
                                <td className="py-1.5 border border-solid border-border">
                                    <Link
                                        to={`${module.moduleRef}/${article.articleRef}`}
                                        className="pl-5"
                                    >
                                        {article.articleName}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ))}
        </div>
    );
};


export default CourseContent;
