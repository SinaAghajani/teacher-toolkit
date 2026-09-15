export interface ClassSubject {
    id: string;
    name: string;
    teacher: string;
    averageScore: number;
    studentCount: number;
}

export interface ClassRoom {
    id: string;
    name: string;
    grade: number;
    section: string;
    academicYear: string;
    studentCount: number;
    averageScore: number;
    attendanceRate: number;
    subjects: ClassSubject[];
    createdAt: string;
}