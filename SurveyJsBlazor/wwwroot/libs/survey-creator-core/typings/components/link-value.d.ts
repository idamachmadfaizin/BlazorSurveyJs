import { Question } from "survey-core";
export declare class QuestionLinkValueModel extends Question {
    linkClickCallback: () => void;
    resetClickCallback: () => void;
    isClickableCallback: () => boolean;
    linkSetButtonCssClasses: string;
    linkClearButtonCssClasses: string;
    isSelected: boolean;
    linkValueText: string;
    showClear: boolean;
    allowClear: boolean;
    showValueInLink: boolean;
    showTooltip: boolean;
    isClickable: boolean;
    constructor(name: string, json?: any);
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    protected onReadOnlyChanged(): void;
    private updateIsClickable;
    get ariaRole(): string;
    get tooltip(): string;
    getType(): string;
    doLinkClick(): void;
    doClearClick(): void;
    private updateLinkValueText;
    private stringifyValue;
    private getObjDisplayValue;
}
