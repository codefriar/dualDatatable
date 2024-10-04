import { LightningElement } from 'lwc';
import fixedColumnData from "./fixedColumnData";
import variableColumnData from "./variableColumnData";

const columnFirstTable = [
    { label: 'Name', type: 'childDatatableCustomCellTemplate', initialWidth: 200, typeAttributes: { value: { fieldName: 'name' } } },
    { label: 'Email', type: 'childDatatableCustomCellTemplate', initialWidth: 200, typeAttributes: { value: { fieldName: 'email' } } }
];

const columnsSecondTable = [

    {
        label: 'Age',
        fieldName: 'age',
        type: 'number',
        sortable: true,
        cellAttributes: { alignment: 'left' }, initialWidth: 100
    },
    { label: 'Address', fieldName: 'address', type: 'text', wrapText: false, initialWidth: 200 },
    { label: 'Phone Number', fieldName: 'phone', type: 'phone', initialWidth: 200 },
    { label: 'Billing address', fieldName: 'billingAddress', type: 'text', wrapText: true, initialWidth: 200 },
    { label: 'Shipping Address', fieldName: 'shippingAddress', type: 'text', wrapText: true, initialWidth: 200 },
];

export default class fixedColumnDatatable extends LightningElement {
    dataSecondTable = variableColumnData;
    columnsSecondTable = columnsSecondTable;
    columnFirstTable = columnFirstTable;
    defaultSortDirection = 'asc';
    sortDirection = 'asc';
    sortedBy;
    dataFirstTable = fixedColumnData;

    constructor(){
        super();
        debugger;
    }

    onHandleSort(event) {
        const { fieldName: sortedBy, sortDirection } = event.detail;
        const cloneData = [...this.dataSecondTable];

        cloneData.sort(this.sortBy(sortedBy, sortDirection === 'asc' ? 1 : -1));
        this.dataSecondTable = cloneData;
        this.sortDirection = sortDirection;
        this.sortedBy = sortedBy;
    }

    sortBy(field, reverse, primer) {
        const key = primer
            ? function (x) {
                return primer(x[field]);
            }
            : function (x) {
                return x[field];
            };

        return function (a, b) {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        };
    }
}