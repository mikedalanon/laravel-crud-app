<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Inertia\Inertia;

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
}