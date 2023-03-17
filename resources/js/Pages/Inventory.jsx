import React from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Inertia } from "@inertiajs/inertia";

import { Head, usePage, Link } from '@inertiajs/react';

  

export default function Inventory(props){

    //to assign prop of higher level pass variable
    const {stocks} = usePage().props;
    
    return(
            <AuthenticatedLayout

                auth={props.auth}
                errors={props.errors}
                header={ <h2 className="font-semibold text-xl text-gray-800 landing-tight">Stocks</h2>}
            >
            <Head title="Stokcs"/>

            <div className="py-12">
                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          <div className="flex items-center justify-between mb-6">
                            <Link href={route("stocks.create")}> Add Stock</Link>
                          </div>
                          <table className="table-fixed w-full">
                            <thead>
                                <tr className="bg-white-100">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Quantity</th>
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {stocks.map(({id,item_name,price,qantity,purchase_date}) => (
                                 <tr>
                                    <td className="border px-4 py-2">{id}</td>
                                    <td className="border px-4 py-2">{item_name}</td>
                                    <td className="border px-4 py-2">{price}</td>
                                    <td className="border px-4 py-2">{qantity}</td>
                                    <td className="border px-4 py-2">{purchase_date}</td>
                                    <td className="border px-4 py-2">
                                        <Link tabindex="1" 
                                         className="px-4 py-2 text-sm text-red bg-blue-500 rounded"
                                        href={route("stocks.edit",id)}>
                                            Edit
                                        </Link>
                                        <button
                                          onClick={destroy}
                                          id={id}
                                          tabindex="-1"
                                          type="button"
                                          className="mx-1 px-4 py-2 text-sm text-green bg-silver-500 rounded"
                                         >Delete</button>

                                    </td>

                                    
                                 </tr>
                                 ))}
                                 {stocks.length === 0 && (

                                    <tr>
                                        <td  className="px-6 py-4 border-t text-red bg-blue-500"
                                        colSpan="6">No Data Available</td>
                                    </tr>

                                 ) }
                            </tbody>

                          </table>
                        </div>
                    </div>
                 </div>    
            </div>
            </AuthenticatedLayout>
    );

    function destroy(e)
    {
        if(confirm("want to delet ?"))
        {
            Inertia.delete(route("stocks.destroy",e.currentTarget.id));
        }
    }

}// inventory


