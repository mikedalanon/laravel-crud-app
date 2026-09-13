<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();

        return Inertia::render('students/index', [
            'students' => $students,
        ]);
    }

    public function create()
    {
        return Inertia::render('students/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:students,email',
        ], [
            'name.required' => 'The name field is required.',
            'email.required' => 'The email field is required.',
            'email.email' => 'The email must be a valid email address.',
            'email.unique' => 'The email has already been taken.',
        ]);

        Student::create($validated);

        return redirect('/students')
        ->with('success', 'Student created successfully.');
    }

    public function edit(Student $student): Response
    {
        return Inertia::render('students/edit', [
            'student' => $student,
        ]);
    }

    public function update(Request $request, Student $student)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:students,email,' . $student->id,
        ], [
            'name.required' => 'The name field is required.',
            'email.required' => 'The email field is required.',
            'email.email' => 'The email must be a valid email address.',
            'email.unique' => 'The email has already been taken.',
        ]);

        $student->update($validated);

        return redirect('/students')
        ->with('success', 'Student updated successfully.');
    }

    public function destroy(Student $student): RedirectResponse
    {
        $student->delete();

        return redirect('/students')
            ->with('success', 'Student deleted successfully.');
    }
}
