<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

Route::inertia('/', 'welcome')->name('home');
Route::get('/students', [StudentController::class, 'index']);
Route::get('/students/create', [StudentController::class, 'create']);