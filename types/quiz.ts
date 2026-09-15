export type QuizStatus = "draft" | "published" | "completed";

export type QuizDifficulty = "easy" | "medium" | "hard";

export type QuestionType = "multiple-choice" | "true-false" | "short-answer";

export interface QuizQuestion {
    id: string;
    question: string;
    type: QuestionType;
    options?: string[];
    correctAnswer?: string;
    points: number;
}

export interface QuizResult {
    studentId: string;
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
    unanswered: number;
    completedAt: string;
}

export interface Quiz {
    id: string;
    title: string;
    description: string;
    subject: string;
    grade: number;
    classId: string;
    status: QuizStatus;
    difficulty: QuizDifficulty;
    questionCount: number;
    duration: number;
    averageScore: number;
    participantCount: number;
    totalParticipants: number;
    questions: QuizQuestion[];
    results: QuizResult[];
    createdAt: string;
    completedAt?: string;
}