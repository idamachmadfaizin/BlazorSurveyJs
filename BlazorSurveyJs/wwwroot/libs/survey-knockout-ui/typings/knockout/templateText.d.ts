export declare var koTemplate: any;
export declare class SurveyTemplateText {
    constructor();
    addText(newText: string, id: string, name: string): void;
    replaceText(replaceText: string, id: string, questionType?: string): void;
    protected getId(id: string, questionType: string): string;
    protected get text(): string;
    protected set text(value: string);
}
