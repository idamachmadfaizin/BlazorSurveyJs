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
    private canvas;
    private scale;
    private valueIsUpdatingInternally;
    private resizeCanvas;
    private scaleCanvas;
    private refreshCanvas;
    private updateValueHandler;
    initSignaturePad(el: HTMLElement): void;
    destroySignaturePad(el: HTMLElement): void;
    /*
    * Specifies the format in which to store the signature image.
    *
    * Possible values:
    *
    * - `"png"` (default)
    * - `"jpeg"`
    * - `"svg"`
    */
    dataFormat: string;
    /*
    * Specifies the width of the signature area. Accepts positive integer numbers.
    */
    signatureWidth: number;
    /*
    * Specifies the height of the signature area. Accepts positive integer numbers.
    */
    signatureHeight: number;
    /**
     * Specifies whether the signature area should be scaled to fit into the question width.
     *
     * Default value: `false`
     *
     * > The signature area is scaled only for display. The resulting image will have dimensions specified by the [`signatureHeight`](#signatureHeight) and [`signatureWidth`](#signatureWidth) properties.
     */
    signatureAutoScaleEnabled: boolean;
    /**
     * Speicifies the minimum width of pen strokes, measured in pixels.
     *
     * Default value: 0.5
     */
    penMinWidth: number;
    /**
     * Speicifies the maximum width of pen strokes, measured in pixels.
     *
     * Default value: 2.5
     */
    penMaxWidth: number;
    private readonly containerHeight: any;
    private readonly containerWidth: any;
    readonly renderedCanvasWidth: string;
    height: number;
    /*
    * Specifies whether to display a button that clears the signature area.
    *
    * Default value: `true`
    */
    allowClear: boolean;
    readonly canShowClearButton: boolean;
    /*
    * Specifies a color for the pen.
    *
    * This property accepts color values in the following formats:
    *
    * - Hexadecimal colors (`"#FF0000"`)
    * - RGB colors (`"rgb(255,0,0)"`)
    * - Color names (`"red"`)
    * @see backgroundColor
    */
    penColor: string;
    /*
    * Specifies a color for the signature area background. Ignored if [`backgroundImage`](#backgroundImage) is set.
    *
    * This property accepts color values in the following formats:
    *
    * - Hexadecimal colors (`"#FF0000"`)
    * - RGB colors (`"rgb(255,0,0)"`)
    * - Color names (`"red"`)
    * @see penColor
    */
    backgroundColor: string;
    /*
    * An image to display in the background of the signature area. Accepts a base64 or URL string value.
    * @see backgroundColor
    */
    backgroundImage: string;
    readonly clearButtonCaption: string;
    /**
     * A Boolean value that specifies whether to show the [placeholder](#placeholder).
     *
     * Default value: `true`
     */
    showPlaceholder: boolean;
    needShowPlaceholder(): boolean;
    /**
     * A placeholder for the signature area. Applies when the [`showPlaceholder`](#showPlaceholder) property is `true`.
     */
    placeholder: string;
    endLoadingFromJson(): void;
}
