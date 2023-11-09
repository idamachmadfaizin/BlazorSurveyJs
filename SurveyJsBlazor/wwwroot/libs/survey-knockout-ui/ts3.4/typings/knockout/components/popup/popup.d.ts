import { PopupBaseViewModel, IDialogOptions } from "survey-core";
export declare class PopupViewModel {
    popupViewModel: PopupBaseViewModel;
    private _popupImplementor;
    private _popupModelImplementor;
    constructor(popupViewModel: PopupBaseViewModel);
    dispose(): void;
    visibilityChangedHandler: (s: any, option: {
        isVisible: boolean;
    }) => void;
}
export declare function showModal(componentName: string, data: any, onApply: () => boolean, onCancel?: () => void, cssClass?: string, title?: string, displayMode?: "popup" | "overlay", container?: HTMLElement): PopupBaseViewModel;
export declare function showDialog(dialogOptions: IDialogOptions, rootElement?: HTMLElement): PopupBaseViewModel;
