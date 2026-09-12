import { useForm } from "@inertiajs/react";
import { update } from "@/actions/App/Http/Controllers/StudentController";

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
        <div>
            <h1>Update Student</h1>

            <form onSubmit={submit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && <p role="alert">{errors.email}</p>}
                </div>

                <button type="submit">Update Student</button>
            </form>
        </div>
    );
}
