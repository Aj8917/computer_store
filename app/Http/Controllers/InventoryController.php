<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Stocks;
use Illuminate\Support\Facades\Validator;

class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stock=Stocks::all();
        return Inertia::render('Inventory',['stocks'=>$stock]);
        //dd('ready ...');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Validator::make($request->all(),
            [
                'item_name'=>['required'],
                'price'=>['required','numeric'],
                'quantity'=>['required'],
                'purchase_date'=>['required'],
            ]
        )->validate();

        Stocks::create($request->all());
        return redirect()->route('add_inventory');
       // print_r($request->all());die();
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
    public function edit(Stocks $id)
{
   // dd($id);
    return Inertia::render('edit', ['stock' => $id]);

}


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Stocks $id)
{
    
    Validator::make($request->all(), [
        'item_name'=>['required'],
        'price'=>['required','numeric'],
        'quantity'=>['required'],
        'purchase_date'=>['required'],
    ])->validate();

    $stock = Stocks::where('id', $id->id)->first();
    // echo $request->id;
    // dd($stock);
    if ($stock) {
        $stock->update($request->all());
    }
    return redirect()->route('add_inventory');
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       Stocks::find($id)->delete();

       return redirect()->route('add_inventory');
    }
}
