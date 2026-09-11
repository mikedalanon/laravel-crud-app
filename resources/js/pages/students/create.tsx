export default function Create() {
    return (
        <div>
            <h1>Create Student</h1>

            <form>
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>

                <button type="submit">
                    Save Student
                </button>
            </form>
        </div>
    );
}