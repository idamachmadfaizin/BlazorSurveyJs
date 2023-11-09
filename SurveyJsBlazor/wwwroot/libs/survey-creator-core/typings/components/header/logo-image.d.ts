import { Base, SurveyModel } from "survey-core";
import { CreatorBase } from "../../creator-base";
export declare class LogoImageViewModel extends Base {
    private creator;
    root: HTMLDivElement;
    constructor(creator: CreatorBase, root: HTMLDivElement);
    get allowEdit(): boolean;
    get containerCss(): string;
    isUploading: any;
    get survey(): SurveyModel;
    private uploadFile;
    chooseFile(model: LogoImageViewModel): void;
    remove(model: LogoImageViewModel): void;
    get chooseLogoPlaceholder(): string;
    get acceptedTypes(): string;
}
