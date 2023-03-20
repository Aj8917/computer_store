import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function edit(props) {
    const { stock } = usePage().props; //to get page data
    const { data, setData, put, errors } = useForm({
        item_name: stock.item_name || "",
        price: stock.price || "",
        quantity: stock.quantity || "",
        purchase_date: stock.purchase_date || "",
    });//to assign data to vaiables 
    // alert(stock.id);
    return (
        
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Stock</h2>}
        >
            <Head title="Inventorty" />
            <div className="py-12">

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link className="px-6 py-2 text-white bg-red-300 
                            rounded-mb focus:outline-none"
                                    href={route("add_inventory")}
                                >Back</Link>
                            </div>
                            <form name="editForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label htmlFor="item_name">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                           
                                            name="item_name"
                                            value={data.item_name}
                                            onChange={(e) => setData("item_name", e.target.value )}
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
                                                onChange={(e) => setData( "price", e.target.value)}
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
                                                onChange={(e) => setData("quantity", e.target.value )}
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
                                                onChange={(e) => setData( "purchase_date", e.target.value )}
                                            />
                                            <span className="text-red-500">{errors.purchase_date}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="px-6 py-2 font-bold text-white bg-green-300 rounded">
                                            Update
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
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     put(route('update', [stock.id]),
    //     {
    //         ...data,
    //         _method:'PUT',
    //     });
    //   }

    function handleSubmit(e) {
        e.preventDefault();
        put(route('update', [stock.id]));
    }
    
    
}//export