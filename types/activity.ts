export type ActivityType =
    | "quiz"
    | "lesson"
    | "worksheet"
    | "student"
    | "class"
    | "achievement";

export interface Activity {
    id: string;
    type: ActivityType;
    title: string;
    description: string;
    user?: string;
    userId?: string;
    icon?: string;
    timestamp: string;
    createdAt: string;
}