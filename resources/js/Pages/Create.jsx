import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Inertia} from "@inertiajs/inertia";
import {Head, Link, useForm} from '@inertiajs/react';

export default function Create(props){

    const {data,setData,post,errors}=useForm({
        item_name:"",
        price:"",
        quantity:"",
        purchase_date:"",

    });
    
    return(
            <AuthenticatedLayout
                auth={props.auth}

                errors={props.errors}

                header={<h2 className="font-bold text-blue-500 leading-tight">Add To Stock</h2>}

            >
            <Head title="Stock" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                            <Link className="px-6 py-2 text-white bg-red-300 
                            rounded-mb focus:outline-none"
                            href={ route("add_inventory") }
                            >Back</Link>
                            </div>
                            <form name="CreateForm" onSubmit={handleSubmit}>
  <div className="flex flex-col">
    <div className="mb-4">
      <label htmlFor="item_name">Name</label>
      <input
        type="text"
        className="w-full px-4 py-2"
        id="item_name"
        name="item_name"
        value={data.item_name}
        onChange={(e) => setData({ ...data, item_name: e.target.value })}
      />
      <span className="text-red-600">{errors.item_name}</span>
    </div>
    <div className="flex flex-col">
      <div className="mb-0">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={data.price}
          className="w-full px-4 py-2"
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        <span className="text-red-600">{errors.price}</span>
      </div>
      <div className="mb-2">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          className="w-full px-3 py-1"
          name="quantity"
          value={data.quantity}
          onChange={(e) => setData({ ...data, quantity: e.target.value })}
        />
        <span className="text-red-600">{errors.quantity}</span>
      </div>
      <div className="mb-3">
        <label htmlFor="purchase_date">Purchase Date</label>
        <input
          type="date"
          id="purchase_date"
          className="w-full px-4 py-2"
          name="purchase_date"
          value={data.purchase_date}
          onChange={(e) => setData({ ...data, purchase_date: e.target.value })}
        />
        <span className="text-red-500">{errors.purchase_date}</span>
      </div>
    </div>
    <div className="mt-4">
      <button type="submit" className="px-6 py-2 font-bold text-white bg-green-300 rounded">
        Save
      </button>
    </div>
  </div>
</form>


                        </div>
                    </div>
                </div>
            </div>

            </AuthenticatedLayout>
        
    );

    function handleSubmit(e)
    {
        e.preventDefault();
        post(route("store"));
    }

}//Addinvemtory