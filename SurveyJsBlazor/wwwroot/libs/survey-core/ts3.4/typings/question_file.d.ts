import { IPlainDataOptions } from "./base-interfaces";
import { IQuestionPlainData, Question } from "./question";
import { EventBase } from "./base";
import { SurveyError } from "./survey-error";
import { ActionContainer } from "./actions/container";
import { Action } from "./actions/action";
import { Camera } from "./utils/camera";
import { LocalizableString } from "./localizablestring";
/**
 * A class that describes the File Upload question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/file-upload/ (linkStyle))
 */
export declare class QuestionFileModel extends Question {
    isUploading: boolean;
    isDragging: boolean;
    /**
     * An event that is raised after the upload state has changed.
     *
     * Parameters:
     *
     * - `sender`: `SurveyModel`\
     * A survey instance that raised the event.
     * - `options.state`: `string`\
     * The current upload state: `"empty"`, `"loading"`, `"loaded"`, or `"error"`.
     */
    onUploadStateChanged: EventBase<QuestionFileModel>;
    onStateChanged: EventBase<QuestionFileModel>;
    previewValue: any[];
    currentState: string;
    indexToShow: number;
    pageSize: number;
    containsMultiplyFiles: boolean;
    allowCameraAccess: boolean;
    /**
     * Specifies the source of uploaded files.
     *
     * Possible values:
     *
     * - `"file"` (default) - Allows respondents to select a local file.
     * - `"camera"` - Allows respondents to capture and upload a photo.
     * - `"file-camera"` - Allows respondents to select a local file or capture a photo.
     * @see filePlaceholder
     * @see photoPlaceholder
     * @see fileOrPhotoPlaceholder
     */
    sourceType: string;
    fileNavigator: ActionContainer;
    protected prevFileAction: Action;
    protected nextFileAction: Action;
    protected fileIndexAction: Action;
    closeCameraAction: Action;
    takePictureAction: Action;
    changeCameraAction: Action;
    chooseFileAction: Action;
    startCameraAction: Action;
    cleanAction: Action;
    actionsContainer: ActionContainer;
    readonly fileNavigatorVisible: boolean;
    private readonly pagesCount: any;
    readonly actionsContainerVisible: boolean;
    constructor(name: string);
    readonly videoId: string;
    readonly hasVideoUI: boolean;
    readonly hasFileUI: boolean;
    private videoStream;
    startVideo(): void;
    private startVideoInCamera;
    stopVideo(): void;
    snapPicture(): void;
    private canFlipCameraValue;
    canFlipCamera(): boolean;
    flipCamera(): void;
    private closeVideoStream;
    onHidingContent(): void;
    protected updateElementCssCore(cssClasses: any): void;
    private getFileIndexCaption;
    private updateFileNavigator;
    private prevPreviewLength;
    private previewValueChanged;
    isPreviewVisible(index: number): boolean;
    getType(): string;
    clearValue(): void;
    clearOnDeletingContainer(): void;
    /*
    * Disable this property only to implement a custom preview.
    *
    * [View Demo](https://surveyjs.io/form-library/examples/file-custom-preview/ (linkStyle))
    * @see allowImagesPreview
    */
    showPreview: boolean;
    /*
    * Specifies whether users can upload multiple files.
    *
    * Default value: `false`
    */
    allowMultiple: boolean;
    /*
    * The image height.
    */
    imageHeight: string;
    /*
    * The image width.
    */
    imageWidth: string;
    /*
    * An [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute value for the underlying `<input>` element.
    */
    acceptedTypes: string;
    /*
    * Specifies whether to store file content as text in `SurveyModel`'s [`data`](https://surveyjs.io/form-library/documentation/surveymodel#data) property.
    *
    * If you disable this property, implement `SurveyModel`'s [`onUploadFiles`](https://surveyjs.io/form-library/documentation/surveymodel#onUploadFiles) event handler to specify how to store file content.
    */
    storeDataAsText: boolean;
    /*
    * Enable this property if you want to wait until files are uploaded to complete the survey.
    *
    * Default value: `false`
    */
    waitForUpload: boolean;
    /*
    * Specifies whether to show a preview of image files.
    */
    allowImagesPreview: boolean;
    /*
    * Maximum allowed file size, measured in bytes.
    *
    * Default value: 0 (unlimited)
    */
    maxSize: number;
    /*
    * Specifies whether users should confirm file deletion.
    *
    * Default value: `false`
    */
    needConfirmRemoveFile: boolean;
    getConfirmRemoveMessage(fileName: string): string;
    confirmRemoveMessage: string;
    confirmRemoveAllMessage: string;
    noFileChosenCaption: string;
    chooseButtonCaption: string;
    takePhotoCaption: string;
    replaceButtonCaption: string;
    clearButtonCaption: string;
    removeFileCaption: string;
    loadingFileTitle: string;
    chooseFileTitle: string;
    /**
     * A placeholder text displayed when the File Upload question doesn't contain any files or photos to upload. Applies only when [`sourceType`](#sourceType) value is `"file-camera"`.
     * @see filePlaceholder
     * @see photoPlaceholder
     */
    fileOrPhotoPlaceholder: string;
    /**
     * A placeholder text displayed when the File Upload question doesn't contain any photos to upload. Applies only when the [`sourceType`](#sourceType) value is `"camera"`.
     * @see filePlaceholder
     * @see fileOrPhotoPlaceholder
     */
    photoPlaceholder: string;
    /**
     * A placeholder text displayed when the File Upload question doesn't contain any files to upload. Applies only when the [`sourceType`](#sourceType) value is `"file"`.
     * @see photoPlaceholder
     * @see fileOrPhotoPlaceholder
     */
    filePlaceholder: string;
    locRenderedPlaceholderValue: LocalizableString;
    readonly locRenderedPlaceholder: LocalizableString;
    readonly currentMode: string;
    readonly isPlayingVideo: boolean;
    private setIsPlayingVideo;
    private updateCurrentMode;
    private updateActionsVisibility;
    readonly inputTitle: string;
    readonly chooseButtonText: string;
    clear(doneCallback?: () => void): void;
    readonly renderCapture: string;
    readonly multipleRendered: string;
    readonly showChooseButton: boolean;
    readonly showFileDecorator: boolean;
    readonly showLoadingIndicator: boolean;
    readonly allowShowPreview: boolean;
    readonly showPreviewContainer: boolean;
    readonly showRemoveButtonCore: boolean;
    readonly showRemoveButton: boolean;
    readonly showRemoveButtonBottom: boolean;
    defaultImage(data: any): boolean;
    /**
     * Removes a file with a specified name.
     */
    removeFile(name: string): void;
    protected removeFileByContent(content: any): void;
    /**
     * Loads multiple files into the question.
     * @param files An array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects.
     */
    loadFiles(files: File[]): void;
    private cameraValue;
    protected readonly camera: Camera;
    canPreviewImage(fileItem: any): boolean;
    protected loadPreview(newValue: any): void;
    private isFileLoadingValue;
    protected isFileLoading: boolean;
    protected getIsQuestionReady(): boolean;
    protected onCheckForErrors(errors: Array<SurveyError>, isOnValueChanged: boolean): void;
    protected stateChanged(state: string): void;
    private allFilesOk;
    private isFileImage;
    getPlainData(options?: IPlainDataOptions): IQuestionPlainData;
    getImageWrapperCss(data: any): string;
    protected getActionsContainerCss(css: any): string;
    getRemoveButtonCss(): string;
    getChooseFileCss(): string;
    getReadOnlyFileCss(): string;
    readonly fileRootCss: string;
    getFileDecoratorCss(): string;
    private onChange;
    protected onChangeQuestionValue(newValue: any): void;
    protected calcCssClasses(css: any): any;
    updateElementCss(reNew?: boolean): void;
    endLoadingFromJson(): void;
    protected needResponsiveness(): boolean;
    protected supportResponsiveness(): boolean;
    protected getObservedElementSelector(): string;
    private getFileListSelector;
    private calcAvailableItemsCount;
    private calculatedGapBetweenItems;
    private calculatedItemWidth;
    private _width;
    triggerResponsiveness(hard?: boolean): void;
    protected processResponsiveness(_: number, availableWidth: number): boolean;
    private rootElement;
    private canDragDrop;
    afterRender(el: HTMLElement): void;
    private dragCounter;
    onDragEnter: (event: any) => void;
    onDragOver: (event: any) => boolean;
    onDrop: (event: any) => void;
    onDragLeave: (event: any) => void;
    doChange: (event: any) => void;
    doClean: () => void;
    private clearFilesCore;
    doRemoveFile(data: any): void;
    private removeFileCore;
    doDownloadFile: (event: any, data: any) => void;
    dispose(): void;
}
export declare class FileLoader {
    private fileQuestion;
    private callback;
    constructor(fileQuestion: QuestionFileModel, callback: (status: string, files: any[]) => void);
    loaded: any[];
    load(files: Array<any>): void;
    dispose(): void;
}
