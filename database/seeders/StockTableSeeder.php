<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Stocks;

class StockTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       for($i=1;$i<6;$i++)
       {

        Stocks::create(
                        [
                            'item_name' =>'item'.($i+1),
                            'price'=>rand(1,100),
                            'qantity'=>rand(1,10),
                            'purchase_date'=>now(),
                        ]

        ); 

       }
      
       
    }
}
