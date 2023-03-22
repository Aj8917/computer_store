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
    protected $fillabel=['stock_id','price','quantity','cust_mob_no'];

    public function Stock()
    {
        return $this->belongsTo(Stocks::class,'stock_id','id');
    }
    public function MobleExists($mobile_no) //to search the customer exists or not
    {
        $cust=Customers::where('mob_no',$mobile);
        if($cust)
        {
            return true;
        }
            return false;
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
               ->select('id','item_name')
               ->get();
               return $data;
    }
}
