export type LessonPlanStatus = "draft" | "ready" | "completed";

export interface LessonObjective {
    id: string;
    title: string;
    description?: string;
}

export interface LessonActivity {
    id: string;
    title: string;
    description: string;
    duration: number;
    type: "introduction" | "instruction" | "activity" | "assessment";
}

export interface LessonPlan {
    id: string;
    title: string;
    subject: string;
    grade: number;
    classId: string;
    duration: number;
    status: LessonPlanStatus;
    objectives: LessonObjective[];
    materials: string[];
    activities: LessonActivity[];
    assessment: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}