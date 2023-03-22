<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Bills;

class BillsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=0;$i<4;$i++)
        {

        
           Bills::create(
                        [
                        'bill_no'=>'BillNO'.$i,
                        'quantity'=>rand(1,2),
                        'price'=>rand(100,200),
                        'cust_name'=>Str::random(10),
                        'cust_mob_no'=>rand(10,80),
                        'stock_id' =>rand(1,3),

                        ]
                        );
        }
    }
}
