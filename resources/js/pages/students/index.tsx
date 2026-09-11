type Student = {
    id: number;
    name: string;
    email: string;
};

export default function Index({ students }: { students: Student[] }) {
    return (
        <div>
            <h1>Students</h1>

            {students.map((student) => (
                <p key={student.id}>
                    {student.id}
                    {student.name}
                    {student.email}
                </p>
            ))}
        </div>
    );
}
