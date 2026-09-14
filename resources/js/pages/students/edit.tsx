import { useForm } from "@inertiajs/react";
import { update } from "@/actions/App/Http/Controllers/StudentController";
import { Link } from "@inertiajs/react";

type Student = {
    id: number;
    name: string;
    email: string;
};

export default function Update({ student }: { student: Student }) {
    const { data, setData, put, errors } = useForm({
        name: student.name,
        email: student.email,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        put(update.url(student.id));
    }

    return (
        <div className="border flex flex-col justify-center items-center gap-4 p-8">
            <h1 className="text-2xl font-bold px-4 py-2 bg-amber-300 rounded">
                Update Student
            </h1>

            <Link
                href="/students"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
                Back to Students
            </Link>

            <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="font-semibold">Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="border p-2 rounded"
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="font-semibold">Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="border p-2 rounded"
                    />
                    {errors.email && (
                        <p role="alert" className="text-red-500">
                            {errors.email}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Update Student
                </button>
            </form>
        </div>
    );
}
