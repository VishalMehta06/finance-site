import type { ContentTable } from "../components/CourseContent";

const foundation: ContentTable = {
    content: [
        {
            moduleName: "Module 1: Know Your Numbers",
            moduleRef: "module-1",
            articles: [
                {
                    articleName: "Know Your Income",
                    articleRef: "know-your-income"
                },
                {
                    articleName: "Know Your Assets",
                    articleRef: "know-your-assets"
                },
                {
                    articleName: "Know Your Debts",
                    articleRef: "know-your-debts"
                },
                {
                    articleName: "How to Calculate Your Net Worth",
                    articleRef: "how-to-calculate-your-net-worth"
                },
                {
                    articleName: "Your Credit Score",
                    articleRef: "your-credit-score"
                },
            ]
        },
        {
            moduleName: "Module 2: Take Your Financial Inventory",
            moduleRef: "module-2",
            articles: [
                {
                    articleName: "Expenses and Debt",
                    articleRef: "expenses"
                },
                {
                    articleName: "Income",
                    articleRef: "income"
                }
            ]
        },
        {
            moduleName: "Module 3: Next Steps",
            moduleRef: "module-3",
            articles: [
                {
                    articleName: "Paying off Debt",
                    articleRef: "paying-off-debt"
                },
                {
                    articleName: "Increasing Income",
                    articleRef: "increasing-income"
                }
            ]
        }
    ]
};

export default foundation;