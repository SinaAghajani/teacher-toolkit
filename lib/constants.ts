export const APP_NAME = "Teacher Toolkit";

export const APP_DESCRIPTION =
    "ابزارهای حرفه‌ای و هوشمند برای معلمان";

export const NAVIGATION = {
    dashboard: "/dashboard",
    students: "/students",
    classes: "/classes",
    quizzes: "/quizzes",
    lessonPlans: "/lesson-plans",
    worksheets: "/worksheets",
    analytics: "/analytics",
    settings: "/settings",
    help: "/help",
} as const;

export const BREAKPOINTS = {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
    large: 1280,
} as const;