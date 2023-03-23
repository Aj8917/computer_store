<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\InvoiceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/', function () {
    if (Route::has('login')) {
        return redirect()->route('login');
    }
    // If the login route doesn't exist, render the Welcome page
    return Inertia::render('Welcome', [
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//Route::resource('add_inventory','InventoryController');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::get('/add_inventory',[InventoryController::class,'index'])->name('add_inventory'); //to load table details
    Route::get('/create',[InventoryController::class,'create'])->name('stocks.create'); //to render add item form 
    Route::post('/store',[InventoryController::class,'store'])->name('store');
    Route::get('/edit/{id}',[InventoryController::class,'edit'])->name('stocks.edit');
    //Route::get('/stocks/edit/{id}', [InventoryController::class, 'edit'])->name('stocks.edit');
    Route::put('/update/{id}', [InventoryController::class, 'update'])->name('update');
    Route::delete('/destroy/{id}',[InventoryController::class,'destroy'])->name('stocks.destroy');
});

Route::middleware('auth')->group(function(){

   
    Route::get('/bills', [InvoiceController::class, 'index'])->name('bills');
    Route::get('/generate_bill',[InvoiceController::class,'create'])->name('generate_bill');
    Route::post('/bill.store',[InvoiceController::class,'store'])->name('bill.store');
    Route::get('/bill.edit/{id}',[InvoiceController::class,'edit'])->name('bill.edit');
    Route::delete('bill.destroy/{id}',[InvoiceController::class,'destroy'])->name('remove');
});
require __DIR__.'/auth.php';
