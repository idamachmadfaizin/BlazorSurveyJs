import { ITheme } from "survey-core";
export declare const Themes: {
    [index: string]: ITheme;
};
export declare const PredefinedThemes: string[];
export declare function getThemeFullName(theme: ITheme): string;
export declare const PredefinedColors: {
    light: {
        teal: string;
        blue: string;
        purple: string;
        orchid: string;
        tulip: string;
        brown: string;
        green: string;
    };
    dark: {
        teal: string;
        blue: string;
        purple: string;
        orchid: string;
        tulip: string;
        brown: string;
        green: string;
    };
};
export declare function findSuitableTheme(themeName: string, probeThemeFullName: string): ITheme;
