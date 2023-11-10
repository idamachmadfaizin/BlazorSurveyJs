import { Table } from "../table";
interface ITableExtension {
    location: string;
    name: string;
    visibleIndex: number;
    render: (table: Table, opt: any) => HTMLElement;
    destroy?: () => void;
}
export declare class TableExtensions {
    private table;
    constructor(table: Table);
    private static extensions;
    private renderedExtensions;
    render(targetNode: HTMLElement, location: string, options?: any): void;
    destroy(): void;
    static registerExtension(extension: ITableExtension): void;
    private static removeExtension;
    static unregisterExtension(location: string, actionName: string): void;
    static findExtension(location: string, actionName: string): ITableExtension;
    private sortExtensions;
}
export {};
