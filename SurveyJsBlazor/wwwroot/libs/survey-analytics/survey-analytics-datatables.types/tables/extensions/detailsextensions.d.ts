import { TableRow } from "../table";
import { Table } from "../table";
export declare class Details {
    protected table: Table;
    private row;
    protected targetNode: HTMLElement;
    constructor(table: Table, row: TableRow, targetNode: HTMLElement);
    private detailsTable;
    protected location: string;
    open(): void;
    protected createShowAsColumnButton: (columnName: string) => HTMLElement;
    close(): void;
}
