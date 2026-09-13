import { Link } from "@inertiajs/react";
import { destroy } from "@/actions/App/Http/Controllers/StudentController";

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
                    <Link
                        href={destroy.url(student.id)}
                        method="delete"
                        as="button"
                    >
                        Delete
                    </Link>
                </div>
            ))}
        </div>
    );
}
