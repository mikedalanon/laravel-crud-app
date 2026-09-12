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
        <div>
            <h1>Create Student</h1>

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

                <button type="submit">Save Student</button>
            </form>
        </div>
    );
}
