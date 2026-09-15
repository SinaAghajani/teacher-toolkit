import type { Worksheet } from "@/types/worksheet";

export const worksheets: Worksheet[] = [
    {
        id: "worksheet-001",
        title: "کاربرگ تمرین کسرها",
        description:
            "مجموعه‌ای از تمرین‌های متنوع برای تثبیت مفهوم کسر و مقایسه کسرها.",
        subject: "ریاضی",
        grade: 6,
        classId: "class-001",
        status: "published",
        difficulty: "medium",
        questionCount: 12,
        estimatedTime: 25,
        downloads: 34,
        createdAt: "1405/06/05",
        updatedAt: "1405/06/12",
        questions: [
            {
                id: "worksheet-question-001",
                question: "کسر ۳/۵ را با یک شکل مناسب نمایش دهید.",
                type: "short-answer",
                points: 2,
            },
            {
                id: "worksheet-question-002",
                question: "کدام کسر بزرگ‌تر است؟",
                type: "multiple-choice",
                options: ["۱/۲", "۲/۳", "۱/۳", "۲/۵"],
                points: 1,
            },
            {
                id: "worksheet-question-003",
                question: "کسر ۴/۸ با کسر ۱/۲ برابر است.",
                type: "true-false",
                points: 1,
            },
        ],
    },
    {
        id: "worksheet-002",
        title: "کاربرگ نیرو و حرکت",
        description:
            "تمرین‌های مفهومی و کاربردی علوم درباره نیرو، حرکت و تغییر حالت اجسام.",
        subject: "علوم",
        grade: 6,
        classId: "class-001",
        status: "published",
        difficulty: "easy",
        questionCount: 10,
        estimatedTime: 20,
        downloads: 28,
        createdAt: "1405/06/08",
        updatedAt: "1405/06/13",
        questions: [
            {
                id: "worksheet-question-004",
                question: "نیرو چگونه می‌تواند حرکت یک جسم را تغییر دهد؟",
                type: "short-answer",
                points: 2,
            },
            {
                id: "worksheet-question-005",
                question: "هل دادن یک جسم نمونه‌ای از وارد کردن نیرو است.",
                type: "true-false",
                points: 1,
            },
        ],
    },
    {
        id: "worksheet-003",
        title: "تمرین واژگان فارسی",
        description:
            "تمرین کاربردی برای مرور واژگان، مترادف‌ها و متضادهای درس‌های فارسی.",
        subject: "فارسی",
        grade: 6,
        classId: "class-001",
        status: "draft",
        difficulty: "medium",
        questionCount: 15,
        estimatedTime: 25,
        downloads: 0,
        createdAt: "1405/06/14",
        updatedAt: "1405/06/15",
        questions: [
            {
                id: "worksheet-question-006",
                question: "برای واژه «آشکار» یک واژه مترادف بنویسید.",
                type: "short-answer",
                points: 1,
            },
            {
                id: "worksheet-question-007",
                question: "کدام گزینه متضاد واژه «آغاز» است؟",
                type: "multiple-choice",
                options: ["شروع", "پایان", "ادامه", "حرکت"],
                points: 1,
            },
        ],
    },
];