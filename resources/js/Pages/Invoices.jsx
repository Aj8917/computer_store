import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia";

export default function Invoices(props)
{
    const {result} =usePage().props;
    let srNO=1;
    return(
            <Authenticated 
                auth={props.auth}
                errors={props.errors}
                header={ <h2 className="font-semibold text-xl text-gray-800 landing-tight">Invoices</h2>}
            >
              <Head title="Bills"></Head>  
              <div className="py-12">
                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          <div className="flex items-center justify-between mb-6">
                            <Link className="px-4 py-2 text-green bg-purple-500 rounded"href={route("generate_bill")}> Create  Bill</Link>
                          </div>
                          <table className="table-fixed w-full">
                            <thead>
                                <tr className="bg-white-100">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Bill NO</th>
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Quantity</th>
                                    <th className="px-4 py-2">Cutnomer Name</th>
                                    <th className="px-4 py-2">Cust. Mob</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                           {result.map(({bill_id,bill_no,created_at,item_name,quantity,price,cust_name,cust_mob_no})=>(
                            <tr key={bill_id}>
                              <td className="border px-4 py-2">{srNO++}</td>
                              <td className="border px-4 py-2">{bill_no}</td>  
                              <td className="border px-4 py-2">{created_at}</td>
                              <td className="border px-4 py-2">{item_name}</td>  
                               
                              <td className="border px-4 py-2">{price}</td>  
                              <td className="border px-4 py-2">{quantity}</td>
                              <td className="border px-4 py-2">{cust_name}</td>  
                              <td className="border px-4 py-2">{cust_mob_no}</td>  
                              <td className="border px-4 py-2">
                                <Link tabIndex="1" className="px-4 py-2 text-sm bg-green-300 rounded"href={route("bill.edit",bill_id)}> Edit
                                </Link>
                                <button tabIndex="-1" id={bill_id}  type="button"
                                          className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded" onClick={destroy}>Delete</button>
                              </td>  
                              
                            </tr>
                            ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                        </div>
                        </div>


            </Authenticated>
    );
    function destroy(e)
    {
      if(confirm("Are Sure to remove Bill ?"))
      {
        Inertia.delete(route('remove',e.currentTarget.id));
      }
    }
}//Invoices
