import SortableTable from '../components/SortableTable';
import Table from '../components/Table';

function TablePage() {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-300', score: 2 },
        { name: 'Grape', color: 'bg-violet-600', score: 4 },
    ];

    const config = [
        {
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return (
        <div>
            <div className='mb-10'>
                <h2 className="font-bold text-xl text-slate-500 underline">
                    Normal table
                </h2>
                <Table data={data} config={config} keyFn={keyFn} />
            </div>
            
            <div>
                <h2 className="font-bold text-xl text-slate-500 underline">
                    Sortable table
                </h2>
                <SortableTable data={data} config={config} keyFn={keyFn} />
            </div>
        </div>
    );
}

export default TablePage;
