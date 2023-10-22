import { Question } from "./question";
import { ITheme } from "./themes";
/**
 * A class that describes the Signature question type.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/signature-pad-widget-javascript/ (linkStyle))
 */
export declare class QuestionSignaturePadModel extends Question {
    isDrawingValue: boolean;
    private getPenColorFromTheme;
    private updateColors;
    protected getCssRoot(cssClasses: any): string;
    protected updateValue(): void;
    constructor(name: string);
    getType(): string;
    afterRenderQuestionElement(el: HTMLElement): void;
    beforeDestroyQuestionElement(el: HTMLElement): void;
    themeChanged(theme: ITheme): void;
    initSignaturePad(el: HTMLElement): void;
    destroySignaturePad(el: HTMLElement): void;
    /**
     * Specifies the format in which to store the signature image.
     *
     * Possible values:
     *
     * - `"png"` (default)
     * - `"jpeg"`
     * - `"svg"`
     */
    get dataFormat(): string;
    set dataFormat(val: string);
    /**
     * Specifies the width of the signature area. Accepts positive integer numbers.
     */
    get signatureWidth(): number;
    set signatureWidth(val: number);
    /**
     * Specifies the height of the signature area. Accepts positive integer numbers.
     */
    get signatureHeight(): number;
    set signatureHeight(val: number);
    get height(): number;
    set height(val: number);
    /**
     * Specifies whether to display a button that clears the signature area.
     *
     * Default value: `true`
     */
    get allowClear(): boolean;
    set allowClear(val: boolean);
    get canShowClearButton(): boolean;
    /**
     * Specifies a color for the pen.
     *
     * This property accepts color values in the following formats:
     *
     * - Hexadecimal colors (`"#FF0000"`)
     * - RGB colors (`"rgb(255,0,0)"`)
     * - Color names (`"red"`)
     * @see backgroundColor
     */
    get penColor(): string;
    set penColor(val: string);
    /**
     * Specifies a color for the signature area background. Ignored if [`backgroundImage`](#backgroundImage) is set.
     *
     * This property accepts color values in the following formats:
     *
     * - Hexadecimal colors (`"#FF0000"`)
     * - RGB colors (`"rgb(255,0,0)"`)
     * - Color names (`"red"`)
     * @see penColor
     */
    get backgroundColor(): string;
    set backgroundColor(val: string);
    /**
     * An image to display in the background of the signature area. Accepts a base64 or URL string value.
     * @see backgroundColor
     */
    get backgroundImage(): string;
    set backgroundImage(val: string);
    get clearButtonCaption(): string;
    needShowPlaceholder(): boolean;
    get placeHolderText(): string;
    endLoadingFromJson(): void;
}
