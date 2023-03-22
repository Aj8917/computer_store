<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Bills;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      //dd('test successfully');
      $bills=Bills::get_all();
      //print_r($bills);die();
      return Inertia::render('Invoices',['result'=>$bills]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $stock=Bills::Stock_all();
        //print_r($stock);die();
        return Inertia::render('generate_bill',['stocks'=>$stock]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Bills::where('bill_id',$id)->delete();
        return redirect()->route('bills');
    }
}
