import { React } from "React";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage, Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Generate_bill(props) {
    const { stocks } = usePage().props;
    const { data, setdata, post, errors } = useForm({
        bill_no: "",
        price: "",
        quantity: "",
        stock_id: "",
        cust_name: "",
        cust_mob_no: "",
    });

    return (
        <Authenticated
            auth={props.auth}
            eroors={props.errors}
            header={<h2 className="font-bold text-blue-500 leading-tight">Generate Bill</h2>}
        >
            <Head title="Add Bill" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link className="px-4 py-2 text-green bg-green-500 rounded" href={route("bills")}>Invoices</Link>
                            </div>
                            <form name="genrate_bill" onSubmit={add_bill}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label htmlFor="cust_name">Customer Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            id="cust_name"
                                            name="cust_name"
                                            value={data.cust_name}
                                            onChange={(e) => setData({ ...data, cust_name: e.target.value })}
                                        />
                                        <span className="text-red-600">{errors.cust_name}</span>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="mb-4">
                                            <label htmlFor="cust_mob">Mobile Number</label>
                                            <input
                                                type="number"
                                                id="cust_mob_no"
                                                name="cust_mob_no"
                                                value={data.cust_mob_no}
                                                className="w-full px-4 py-2"
                                                onChange={(e) => setData({ ...data, cust_mob_no: e.target.value })}

                                            />
                                            <span className="text-red-600">
                                                {errors.cust_mob_no}

                                            </span>
                                        </div>
                                    </div>
                                    <select id="stock_id" value={data.stock_id} onChange={(e) => setData({ ...data, stock_id: e.target.value })} className="w-full px-4 py-2 text-white-500">
                                    <option>Select</option>
                                        {stocks.map(stock => (
                                            
                                            <option key={stock.id} value={stock.id}>
                                                {stock.item_name}
                                            </option>
                                        ))}
                                    </select>

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
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
    function add_bill(e) {
        e.preventDefault;
        post(route('add_bill'));
    }
}//default
