export declare class DescriptionMardownParser {
    private static boldRegEx;
    private static italicRegEx;
    private static codeRegEx;
    private static linkRegEx;
    parse(text: string): string;
    private replace;
    private addLineBreaks;
}
export declare function parsePropertyDescription(text: string): string;
