import { QuestionImageModel, SurveyElement, SurveyTemplateRendererTemplateData, QuestionFileModel } from "survey-core";
import { CreatorBase } from "../creator-base";
import { QuestionAdornerViewModel } from "./question";
export declare class QuestionImageAdornerViewModel extends QuestionAdornerViewModel {
    questionRoot: HTMLElement;
    filePresentationModel: QuestionFileModel;
    private initFilePresentationModel;
    constructor(creator: CreatorBase, surveyElement: SurveyElement, templateData: SurveyTemplateRendererTemplateData, questionRoot: HTMLElement);
    isUploading: any;
    isEmptyImageLink: any;
    chooseFile(model: QuestionImageAdornerViewModel): void;
    get acceptedTypes(): string;
    imageLinkValueChangedHandler(): void;
    get isEmptyElement(): boolean;
    get question(): QuestionImageModel;
    get placeholderText(): string;
    get chooseImageText(): string;
    css(): string;
    dispose(): void;
}
