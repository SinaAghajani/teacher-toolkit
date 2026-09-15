import type { LessonPlan } from "@/types/lesson";

export const lessonPlans: LessonPlan[] = [
    {
        id: "lesson-001",
        title: "آشنایی با کسرها",
        subject: "ریاضی",
        grade: 6,
        classId: "class-001",
        duration: 45,
        status: "ready",
        createdAt: "1405/06/01",
        updatedAt: "1405/06/12",
        objectives: [
            {
                id: "objective-001",
                title: "درک مفهوم کسر",
                description: "دانش‌آموز بتواند کسر را به عنوان بخشی از یک کل توضیح دهد.",
            },
            {
                id: "objective-002",
                title: "تشخیص صورت و مخرج",
                description: "دانش‌آموز بتواند اجزای یک کسر را به درستی مشخص کند.",
            },
            {
                id: "objective-003",
                title: "نمایش کسر با شکل",
            },
        ],
        materials: [
            "تخته هوشمند",
            "کارت‌های آموزشی",
            "اشکال هندسی",
            "کتاب ریاضی",
        ],
        activities: [
            {
                id: "activity-001",
                title: "فعال‌سازی دانش قبلی",
                description: "مرور تقسیم یک کل به قسمت‌های مساوی با استفاده از مثال‌های روزمره.",
                duration: 5,
                type: "introduction",
            },
            {
                id: "activity-002",
                title: "ارائه مفهوم کسر",
                description: "معرفی صورت و مخرج و نمایش کسرهای ساده با شکل.",
                duration: 12,
                type: "instruction",
            },
            {
                id: "activity-003",
                title: "فعالیت گروهی",
                description: "دانش‌آموزان با کارت‌های آموزشی کسرهای مختلف را می‌سازند.",
                duration: 15,
                type: "activity",
            },
            {
                id: "activity-004",
                title: "ارزشیابی پایانی",
                description: "حل چند سؤال کوتاه برای بررسی میزان یادگیری.",
                duration: 8,
                type: "assessment",
            },
        ],
        assessment:
            "دانش‌آموزان با حل سه سؤال کوتاه و نمایش یک کسر با شکل مورد ارزیابی قرار می‌گیرند.",
        notes: "برای دانش‌آموزان ضعیف‌تر از اشکال عینی و مثال‌های روزمره استفاده شود.",
    },
    {
        id: "lesson-002",
        title: "نیرو و حرکت",
        subject: "علوم",
        grade: 6,
        classId: "class-001",
        duration: 45,
        status: "completed",
        createdAt: "1405/06/03",
        updatedAt: "1405/06/10",
        objectives: [
            {
                id: "objective-004",
                title: "تعریف نیرو",
                description: "دانش‌آموز مفهوم نیرو و اثر آن بر اجسام را توضیح دهد.",
            },
            {
                id: "objective-005",
                title: "شناخت اثر نیرو",
                description: "دانش‌آموز بتواند تغییر حرکت یا شکل جسم را به نیرو مرتبط کند.",
            },
        ],
        materials: [
            "توپ",
            "ماشین اسباب‌بازی",
            "تخته",
            "کتاب علوم",
        ],
        activities: [
            {
                id: "activity-005",
                title: "شروع با یک آزمایش",
                description: "بررسی حرکت توپ با هل دادن و کشیدن.",
                duration: 7,
                type: "introduction",
            },
            {
                id: "activity-006",
                title: "توضیح مفهوم نیرو",
                description: "بررسی رابطه نیرو با تغییر حرکت و شکل اجسام.",
                duration: 12,
                type: "instruction",
            },
            {
                id: "activity-007",
                title: "آزمایش گروهی",
                description: "دانش‌آموزان اثر نیرو را روی چند جسم بررسی می‌کنند.",
                duration: 16,
                type: "activity",
            },
            {
                id: "activity-008",
                title: "جمع‌بندی",
                description: "مرور نکات اصلی و پاسخ به سؤالات دانش‌آموزان.",
                duration: 10,
                type: "assessment",
            },
        ],
        assessment:
            "ارزیابی با مشاهده فعالیت گروهی، پرسش شفاهی و یک فعالیت کوتاه کتبی انجام می‌شود.",
    },
    {
        id: "lesson-003",
        title: "درک مطلب و مفهوم متن",
        subject: "فارسی",
        grade: 6,
        classId: "class-001",
        duration: 45,
        status: "draft",
        createdAt: "1405/06/08",
        updatedAt: "1405/06/14",
        objectives: [
            {
                id: "objective-006",
                title: "شناسایی ایده اصلی متن",
            },
            {
                id: "objective-007",
                title: "استخراج اطلاعات مهم",
            },
        ],
        materials: [
            "متن آموزشی",
            "کتاب فارسی",
            "کاربرگ درک مطلب",
        ],
        activities: [
            {
                id: "activity-009",
                title: "خواندن متن",
                description: "خواندن متن توسط معلم و سپس دانش‌آموزان.",
                duration: 10,
                type: "introduction",
            },
            {
                id: "activity-010",
                title: "تحلیل متن",
                description: "شناسایی موضوع و ایده اصلی متن.",
                duration: 15,
                type: "instruction",
            },
            {
                id: "activity-011",
                title: "حل کاربرگ",
                description: "پاسخ به سؤالات درک مطلب به صورت فردی.",
                duration: 15,
                type: "activity",
            },
            {
                id: "activity-012",
                title: "جمع‌بندی",
                description: "مرور پاسخ‌ها و رفع اشکالات.",
                duration: 5,
                type: "assessment",
            },
        ],
        assessment:
            "دانش‌آموزان با پاسخ به سؤالات درک مطلب و توضیح ایده اصلی متن ارزیابی می‌شوند.",
    },
];