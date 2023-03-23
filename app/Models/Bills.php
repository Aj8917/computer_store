<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Stocks;
use App\Models\Customers;
use Illuminate\Support\Facades\DB;
class Bills extends Model
{
    use HasFactory;
   
    protected $fillable = ['bill_no', 'cust_name', 'cust_mob_no', 'stock_id', 'quantity', 'price'];


    public function Stock()
    {
        return $this->belongsTo(Stocks::class,'stock_id','id');
    }
   
   
    public static function MobleExists($mobile_no)
    {
        $cust = Customers::where('mob_no', $mobile_no)->first();
        return $cust ? true : false;
    }
    

    
    public static  function get_all()
    {
        $data=DB::table('bills')
                ->leftJoin('stocks','stocks.id','=','bills.stock_id')
                ->select('bills.*','stocks.item_name')
                ->get();
                return $data;
    }
    public static function Stock_all()
    {
       // return Stocks::all();
       $data=DB::table('Stocks')
               ->select('id','item_name','price')
               ->get();
               return $data;
    }
}
