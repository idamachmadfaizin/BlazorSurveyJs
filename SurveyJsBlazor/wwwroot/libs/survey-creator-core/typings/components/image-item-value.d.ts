import { ImageItemValue, QuestionSelectBase } from "survey-core";
import { CreatorBase } from "../creator-base";
import { ItemValueWrapperViewModel } from "./item-value";
export declare class ImageItemValueWrapperViewModel extends ItemValueWrapperViewModel {
    question: QuestionSelectBase;
    item: ImageItemValue;
    templateData: any;
    itemsRoot: HTMLElement;
    private isChoosingNewFile;
    isFileDragging: boolean;
    isUploading: any;
    constructor(creator: CreatorBase, question: QuestionSelectBase, item: ImageItemValue, templateData: any, itemsRoot: HTMLElement);
    getRootCss(): string;
    getIsNewItemSingle(): boolean;
    chooseFile(model: ImageItemValueWrapperViewModel): void;
    uploadFiles(files: any): void;
    chooseNewFile(model: ImageItemValueWrapperViewModel): void;
    onDragOver: (event: any) => void;
    onDrop: (event: any) => void;
    onDragLeave: (event: any) => void;
    get acceptedTypes(): "" | "image/png, image/gif, image/jpeg, image/apng, image/avif, image/svg+xml, image/webp" | "video/*";
}
