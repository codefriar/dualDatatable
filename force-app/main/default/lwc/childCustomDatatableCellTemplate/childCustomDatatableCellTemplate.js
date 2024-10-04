import { LightningElement, api } from 'lwc';

export default class childCustomDatatableCellTemplate extends LightningElement {
    @api value;
    @api minimumHeight;

    connectedCallback(){
        this.minimumHeight = 'minimumHeight';
    }
}