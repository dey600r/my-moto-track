import { isString } from 'util';
import { ResizableColumn } from 'primeng/table';

export class ReturnModel {
    rows: any[] = [];
    columns: any[] = [];
    config: ConfigurationModal = new ConfigurationModal();
    constructor(r: any[], c: any[], 
        selec: boolean = false, tree: boolean = false, res: boolean = false, reorder: boolean = false, sort: boolean = false) {
        this.rows = r;
        this.columns = c;
        this.config = new ConfigurationModal(selec, tree, res, reorder, sort);
    }
}

export class ConfigurationModal {
    isSelectable:boolean = false;
    isTree: boolean = false;
    isResizabled: boolean = false;
    isReorderabled: boolean = false;
    isSortabled: boolean = false;
    constructor(selec: boolean = false, tree: boolean = false, res: boolean = false, reorder: boolean = false, 
        sort: boolean = false) {
        this.isSelectable = selec;
        this.isTree = tree;
        this.isResizabled = res;
        this.isReorderabled = reorder;
        this.isSortabled = sort;
    }
}
