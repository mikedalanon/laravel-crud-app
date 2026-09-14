import { store } from "@/actions/App/Http/Controllers/StudentController";
import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(store.url());
    }

    return (
        <div className="border flex flex-col justify-center items-center gap-4 p-8">
            <h1 className="text-2xl font-bold px-4 py-2 bg-amber-300 rounded">
                Create Student
            </h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                Back to Students
            </button>
            <form onSubmit={submit}>
                <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input
                        type="text"
                        className="border p-2 rounded"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && (
                        <p role="alert" className="text-red-500">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input
                        type="email"
                        className="border p-2 rounded"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && (
                        <p role="alert" className="text-red-500">
                            {errors.email}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
                >
                    Save Student
                </button>
            </form>
        </div>
    );
}
