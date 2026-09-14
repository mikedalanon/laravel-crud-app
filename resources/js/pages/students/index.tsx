import { Link } from "@inertiajs/react";
import { destroy } from "@/actions/App/Http/Controllers/StudentController";

type Student = {
    id: number;
    name: string;
    email: string;
};

export default function Index({ students }: { students: Student[] }) {
    return (
        <div className="border flex flex-col justify-center items-center gap-4 p-8">
            <h1 className="text-2xl font-bold px-4 py-2 bg-amber-300 rounded">
                Students CRUD
            </h1>
            <Link
                href="/students/create"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Create Student
            </Link>
            <div className="border w-fit max-h-[16rem] p-4 flex flex-col items-center gap-2 overflow-y-auto">
                {students.map((student) => (
                    <div
                        key={student.id}
                        className="border-b py-2 flex items-center gap-4"
                    >
                        <div className="id rounded-full bg-gray-200 p-2 text-sm font-semibold">
                            {student.id}
                        </div>{" "}
                        <div className="name w-[8rem] truncate">
                            {student.name}
                        </div>
                        <div className="email w-[8rem] truncate">
                            {student.email}
                        </div>
                        <Link
                            href={`/students/${student.id}/edit`}
                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                        >
                            Edit
                        </Link>
                        <Link
                            href={destroy.url(student.id)}
                            method="delete"
                            as="button"
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                            Delete
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
