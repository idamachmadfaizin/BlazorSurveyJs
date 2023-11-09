import { Base } from "survey-core";
import { SidebarModel } from "./side-bar-model";
export declare class SidebarTabModel extends Base {
    id: string;
    sidePanel: SidebarModel;
    caption: string;
    visible: boolean;
    model: any;
    componentName: string;
    constructor(id: string, sidePanel: SidebarModel, componentName?: string, model?: any);
}
