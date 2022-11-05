<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CategoriesGetController;
use App\Http\Controllers\CategoriesBrowserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/api/pushcategories', [CategoriesController::class, 'index']);
Route::get('/api/getcategories', [CategoriesGetController::class, 'getCategories']);
Route::get('/api/getcategorie/{id}', [CategoriesGetController::class, 'getCategoriesId']);
Route::get('/', [CategoriesBrowserController::class, 'index']);


 Route::get('/welcome', function () {
     return view('welcome');
 });

 Route::get('/teste', function () {
    return view('teste');
});


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
