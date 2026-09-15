export type StudentStatus = "active" | "inactive" | "attention";

export interface SubjectPerformance {
    subject: string;
    score: number;
    trend: "up" | "down" | "stable";
}

export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    avatar?: string;
    grade: number;
    className: string;
    studentCode: string;
    status: StudentStatus;
    overallScore: number;
    attendance: number;
    subjects: SubjectPerformance[];
    completedQuizzes: number;
    totalQuizzes: number;
    lastActivity: string;
    joinedAt: string;
}