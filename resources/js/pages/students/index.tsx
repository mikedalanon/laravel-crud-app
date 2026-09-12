import { Link } from "@inertiajs/react";

type Student = {
    id: number;
    name: string;
    email: string;
};

export default function Index({ students }: { students: Student[] }) {
    return (
        <div>
            <h1>Students</h1>
            <Link href="/students/create">Create Student</Link>
            {students.map((student) => (
                <div key={student.id}>
                    {student.id} - {student.name} - {student.email}{" "}
                    <Link href={`/students/${student.id}/edit`}>Edit</Link>
                </div>
            ))}
        </div>
    );
}
