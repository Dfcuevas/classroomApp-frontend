import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description:
      "Fundamentals of computer science including algorithms, data structures, and programming paradigms.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Math",
    description:
      "Advanced calculus covering integration techniques, series, and multivariable calculus applications.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG150",
    name: "World Literature",
    department: "English",
    description:
      "Exploration of major literary works from diverse cultures and time periods around the globe.",
    createdAt: new Date().toISOString(),
  },
];
