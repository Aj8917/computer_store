import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link  } from '@inertiajs/react';



export default function Dashboard(props) {
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

          <div className="py-6">
  <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
      <div className="px-4 py-3 text-white-900 card"><Link href={route('add_inventory')}>Inventory</Link></div>
    </div>
  </div>
</div>
<div className="py-1">
  <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
      <div className="px-4 py-2 text-white-900 card"><Link href={route('bills')}>Bills</Link></div>
    </div>
  </div>
</div> 
        </AuthenticatedLayout>
    );
}

