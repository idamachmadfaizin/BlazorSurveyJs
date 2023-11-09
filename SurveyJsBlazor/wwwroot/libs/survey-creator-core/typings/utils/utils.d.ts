import { ItemValue, Question, SurveyElement } from "survey-core";
export declare function getNextItemValue(prefix: string, choices: ItemValue[]): string | number;
export declare function getNextItemText(choices: ItemValue[]): string;
export declare function getNextValue(prefix: string, values: any[]): string | number;
export declare function findParentNode(className: string, sourceNode: HTMLElement): HTMLElement;
export declare function focusFirstControl(renderedElements: HTMLElement[]): void;
export declare function getFirstNonTextElement(elements: any): any;
export declare function getNodesFromKoComponentInfo(componentInfo: any): any;
export declare function propertyExists(obj: any, propertyName: string): boolean;
export declare function isPropertyVisible(obj: any, propertyName: string): boolean;
export declare function toggleHovered(e: MouseEvent, element: HTMLElement, timeout?: number): void;
export declare function clearNewLines(text: string): string;
export declare function select(element: any): void;
export declare function copyObject(dst: any, src: any): void;
export declare function copyCssClasses(dest: any, source: any): void;
export declare function assignDefaultV2Classes(destination: any, questionType: string): void;
export declare function wrapTextByCurlyBraces(text: string): string;
export declare function capitalize(str: string): string;
export declare function notShortCircuitAnd(...args: Array<boolean>): boolean;
export declare const imageMimeTypes = "image/png, image/gif, image/jpeg, image/apng, image/avif, image/svg+xml, image/webp";
export declare function getAcceptedTypesByContentMode(contentMode: string): "" | "image/png, image/gif, image/jpeg, image/apng, image/avif, image/svg+xml, image/webp" | "video/*";
export declare function getQuestionFromObj(obj: SurveyElement): Question;
export declare function ingectAlpha(baseColor: any, alpha: number): any;
export declare function convertRgbaToString(rgbValues: Array<number>, alpha: number): string;
export declare function parseRgbaFromString(value: string): Array<number>;
export declare function parseColor(value: string): {
    color: string;
    opacity: number;
};
export declare function HSBToRGB(h: any, s: any, b: any): number[];
export declare function RGBToHSB(r: any, g: any, b: any): number[];
export declare function assign(...inputs: Array<any>): void;
export declare class ColorCalculator {
    colorSettings: {
        baseColorAlpha: number;
        darkColorAlpha: number;
        lightColorAlpha: number;
        deltaDarkColor: number;
        deltaLightColor: number;
        newColorLight: string;
        newColorDark: string;
    };
    initialize(baseColor: string, lightColor: string, darkColor: string): void;
    calculateColors(newColor: string): void;
}
export declare function saveToFileHandler(fileName: string, blob: Blob): void;
