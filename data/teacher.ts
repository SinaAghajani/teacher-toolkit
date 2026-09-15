export interface TeacherProfile {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    role: string;
    grade: number;
    school: string;
    city: string;
    avatar?: string;
    email: string;
    phone: string;
    experience: number;
    studentCount: number;
    classCount: number;
    subjectCount: number;
}

export const teacher: TeacherProfile = {
    id: "teacher-001",
    firstName: "سینا",
    lastName: "آقاجانی",
    fullName: "سینا آقاجانی",
    role: "معلم پایه ششم",
    grade: 6,
    school: "دبستان اندیشه",
    city: "رشت",
    email: "sina@example.com",
    phone: "09120000000",
    experience: 5,
    studentCount: 28,
    classCount: 1,
    subjectCount: 5,
};