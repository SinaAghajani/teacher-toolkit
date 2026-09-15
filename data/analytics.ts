export interface SubjectAnalytics {
    subject: string;
    score: number;
    previousScore: number;
    studentCount: number;
    completedAssessments: number;
}

export interface MonthlyPerformance {
    name: string;
    score: number;
}

export interface StudentAnalytics {
    studentId: string;
    studentName: string;
    averageScore: number;
    attendance: number;
    completedAssessments: number;
    trend: "up" | "down" | "stable";
}

export interface AnalyticsData {
    averageScore: number;
    previousAverageScore: number;
    attendanceRate: number;
    studentCount: number;
    completedAssessments: number;
    subjectPerformance: SubjectAnalytics[];
    monthlyPerformance: MonthlyPerformance[];
    studentPerformance: StudentAnalytics[];
}

export const analytics: AnalyticsData = {
    averageScore: 84,
    previousAverageScore: 78,
    attendanceRate: 94,
    studentCount: 28,
    completedAssessments: 46,

    subjectPerformance: [
        {
            subject: "ریاضی",
            score: 82,
            previousScore: 76,
            studentCount: 28,
            completedAssessments: 12,
        },
        {
            subject: "علوم",
            score: 86,
            previousScore: 81,
            studentCount: 28,
            completedAssessments: 10,
        },
        {
            subject: "فارسی",
            score: 87,
            previousScore: 82,
            studentCount: 28,
            completedAssessments: 9,
        },
        {
            subject: "مطالعات",
            score: 83,
            previousScore: 77,
            studentCount: 28,
            completedAssessments: 8,
        },
        {
            subject: "هدیه‌ها",
            score: 89,
            previousScore: 85,
            studentCount: 28,
            completedAssessments: 7,
        },
    ],

    monthlyPerformance: [
        {
            name: "مهر",
            score: 72,
        },
        {
            name: "آبان",
            score: 76,
        },
        {
            name: "آذر",
            score: 78,
        },
        {
            name: "دی",
            score: 80,
        },
        {
            name: "بهمن",
            score: 82,
        },
        {
            name: "اسفند",
            score: 84,
        },
    ],

    studentPerformance: [
        {
            studentId: "student-001",
            studentName: "آرین محمدی",
            averageScore: 91,
            attendance: 98,
            completedAssessments: 12,
            trend: "up",
        },
        {
            studentId: "student-002",
            studentName: "سارا احمدی",
            averageScore: 88,
            attendance: 96,
            completedAssessments: 13,
            trend: "up",
        },
        {
            studentId: "student-003",
            studentName: "پارسا کریمی",
            averageScore: 67,
            attendance: 84,
            completedAssessments: 8,
            trend: "down",
        },
        {
            studentId: "student-004",
            studentName: "مریم رضایی",
            averageScore: 95,
            attendance: 100,
            completedAssessments: 13,
            trend: "up",
        },
        {
            studentId: "student-005",
            studentName: "محمد حسینی",
            averageScore: 83,
            attendance: 93,
            completedAssessments: 11,
            trend: "up",
        },
        {
            studentId: "student-006",
            studentName: "نیکا کاظمی",
            averageScore: 90,
            attendance: 97,
            completedAssessments: 12,
            trend: "up",
        },
        {
            studentId: "student-007",
            studentName: "امیرعلی نوری",
            averageScore: 64,
            attendance: 81,
            completedAssessments: 7,
            trend: "down",
        },
        {
            studentId: "student-008",
            studentName: "هلیا مرادی",
            averageScore: 86,
            attendance: 95,
            completedAssessments: 12,
            trend: "stable",
        },
    ],
};