import { QuestionCheckboxBase, QuestionSelectBase } from "./question_baseselect";
import { ItemValue } from "./itemvalue";
import { ILocalizableOwner, LocalizableString } from "./localizablestring";
export declare class ImageItemValue extends ItemValue implements ILocalizableOwner {
    protected typeName: string;
    private videoNotLoaded;
    private imageNotLoaded;
    constructor(value: any, text?: string, typeName?: string);
    getType(): string;
    /*
    * The image or video link property.
    */
    imageLink: string;
    private aspectRatio;
    readonly locImageLink: LocalizableString;
    getLocale(): string;
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    onErrorHandler(): void;
    contentNotLoaded: boolean;
}
/**
  * A class that describes the Image Picker question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/image-picker-question/ (linkStyle))
 */
export declare class QuestionImagePickerModel extends QuestionCheckboxBase {
    constructor(name: string);
    getType(): string;
    supportGoNextPageAutomatic(): boolean;
    readonly hasSingleInput: boolean;
    protected getItemValueType(): string;
    readonly isCompositeQuestion: boolean;
    supportOther(): boolean;
    supportNone(): boolean;
    isAnswerCorrect(): boolean;
    /*
    * Specifies whether users can select multiple images or videos.
    *
    * Default value: `false`
    */
    multiSelect: boolean;
    isItemSelected(item: ItemValue): boolean;
    getItemEnabled(item: ItemValue): boolean;
    clearIncorrectValues(): void;
    protected getDisplayValueCore(keysAsText: boolean, value: any): any;
    /*
    * Specifies whether to display labels under images or videos. Labels text are taken from the `text` property of each object in the `choices` array.
    * @see choices
    */
    showLabel: boolean;
    endLoadingFromJson(): void;
    protected getValueCore(): any;
    private convertValToArrayForMultSelect;
    protected renderedValueFromDataCore(val: any): any;
    protected rendredValueToDataCore(val: any): any;
    /*
    * Specifies the height of containers for images or videos. Accepts positive numbers and CSS values.
    *
    * Default value: undefined
    *
    * Use the `imageFit` property to specify how to fit the images or videos into their containers.
    * @see imageWidth
    * @see imageFit
    */
    imageHeight: number;
    private responsiveImageHeight;
    readonly renderedImageHeight: number;
    /*
    * Specifies the width of containers for images or videos. Accepts positive numbers and CSS values.
    *
    * Default value: 200
    *
    * Use the `imageFit` property to specify how to fit the images or videos into their containers.
    * @see imageHeight
    * @see imageFit
    */
    imageWidth: number;
    private responsiveImageWidth;
    readonly renderedImageWidth: number;
    /*
    * Specifies how to resize images or videos to fit them into their containers.
    *
    * Refer to the [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property description for information on accepted values.
    * @see imageHeight
    * @see imageWidth
    */
    imageFit: string;
    /*
    * Specifies the type of content that choice items display.
    *
    * Possible values:
    *
    * - `"image"` - Images in one of the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO.
    * - `"video"` - Videos in one of the following formats: MP4, MOV, WMV, FLV, AVI, MKV.
    * - `"youtube"` - Links to YouTube videos.
    * - `"auto"` (default) - Selects one of the above based on the `imageLink` property value of each choice item.
    */
    contentMode: string;
    protected convertDefaultValue(val: any): any;
    readonly inputType: "checkbox" | "radio";
    protected isFootChoice(_item: ItemValue, _question: QuestionSelectBase): boolean;
    getSelectBaseRootCss(): string;
    private isResponsiveValue;
    maxImageWidth: number;
    minImageWidth: number;
    maxImageHeight: number;
    minImageHeight: number;
    private readonly isResponsive: any;
    private readonly exactSizesAreEmpty: any;
    private calcIsResponsive;
    protected getObservedElementSelector(): string;
    protected supportResponsiveness(): boolean;
    protected needResponsiveness(): boolean;
    private _width;
    onContentLoaded: (item: ImageItemValue, event: any) => void;
    private responsiveColCount;
    protected getCurrentColCount(): number;
    protected processResponsiveness(_: number, availableWidth: number): boolean;
    triggerResponsiveness(hard?: boolean): void;
    private gapBetweenItems;
    private reCalcGapBetweenItemsCallback;
    afterRender(el: HTMLElement): void;
}
