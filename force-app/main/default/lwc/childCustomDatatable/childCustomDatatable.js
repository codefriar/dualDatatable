import LightningDatatable from 'lightning/datatable';
import CustomCell from './CustomCell.html';

export default class ChildCustomDatatable extends LightningDatatable  {
    static customTypes = {
        childDatatableCustomCellTemplate: {
            template: CustomCell,
            typeAttributes: ['value'],
        }
    }
}