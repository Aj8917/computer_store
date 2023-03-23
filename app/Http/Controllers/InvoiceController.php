<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Bills;
use App\Models\Customers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

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
        //validate input 
        //print_r($request->all());die();
        Validator::make($request->all(),
                    [
                        'cust_name'=>['required','alpha'],
                        'quantity'=> ['required','numeric'],
                        'stock_id'=>['required'],
                        'cust_mob_no'=> ['required','numeric'],
                    ]
                    )->validate();

        
      
        //create bill no 

        $prefix = 'BILL';
        $unique_id = uniqid();
        $date = date('YmdHis');
        $billNumber = $prefix . '_' . $unique_id . '_' . $date;
        // verfy mobile number and add user if not exists 
        $cust_exists=Bills::MobleExists($request->cust_mob_no);
        if(!$cust_exists)
        {
            Customers::create([
                'cust_name' => $request->cust_name,
                'mob_no' => $request->cust_mob_no,
            ]);
        }

        //store to bill table 
        $bill = new Bills([
            'bill_no' => $billNumber,
            'cust_name' => $request->cust_name,
            'cust_mob_no' => $request->cust_mob_no,
            'stock_id' => $request->stock_id,
            'quantity' => $request->quantity,
            'price' => $request->price,
        ]);
        //print_r($request->all());die();
        $bill->save();
        return redirect()->route('bills');
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
