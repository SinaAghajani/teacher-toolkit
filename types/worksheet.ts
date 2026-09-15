export type WorksheetStatus = "draft" | "published" | "archived";

export type WorksheetDifficulty = "easy" | "medium" | "hard";

export interface WorksheetQuestion {
    id: string;
    question: string;
    type: "multiple-choice" | "short-answer" | "true-false";
    options?: string[];
    points: number;
}

export interface Worksheet {
    id: string;
    title: string;
    description: string;
    subject: string;
    grade: number;
    classId: string;
    status: WorksheetStatus;
    difficulty: WorksheetDifficulty;
    questionCount: number;
    estimatedTime: number;
    questions: WorksheetQuestion[];
    downloads: number;
    createdAt: string;
    updatedAt: string;
}