import type { ContentTable } from "../components/CourseContent";

const foundation: ContentTable = {
    content: [
        {
            moduleName: "Module 1: Introduction",
            moduleRef: "module-1",
            articles: [
                {
                    articleName: "Calculate Monthly Essential Expense",
                    articleRef: "calculate-monthly-essential-expense"
                },
                {
                    articleName: "Personal Finance Vocab",
                    articleRef: "personal-finance-vocab"
                }
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