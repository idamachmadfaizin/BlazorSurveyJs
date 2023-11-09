import { Base, SurveyModel } from "survey-core";
export declare class SurveySimulatorModel extends Base {
    constructor();
    landscape: boolean;
    survey: SurveyModel;
    device: string;
    orientation: string;
    considerDPI: boolean;
    isRunning: boolean;
    simulatorEnabled: boolean;
    simulatorScaleEnabled: boolean;
    private currZoomScale;
    get zoomScale(): number;
    activateZoom: () => void;
    deactivateZoom: () => void;
    private listenTryToZoomWithWheel;
    private tryToZoomWithWheel;
    private listenTryToZoom;
    tryToZoom(data: any, event: any): boolean;
    private changeZoomScale;
    private zoomSimulator;
    resetZoomParameters(): void;
    get activeDevice(): string;
    set activeDevice(device: string);
    get landscapeOrientation(): boolean;
    get hasFrame(): boolean;
    get simulatorFrame(): {
        scale: number;
        frameWidth: number;
        frameHeight: number;
        landscapedFrameWidth: number;
        landscapedFrameHeight: number;
        deviceWidth: number;
        deviceHeight: number;
        cssClass: string;
    };
    getRootCss(): string;
}
export declare var DEFAULT_MONITOR_DPI: number;
export declare var simulatorDevices: {
    desktop: {
        deviceType: string;
        title: string;
    };
    iPhone6: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPhone6plus: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPhone8: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPhone8plus: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPhoneX: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPhoneXmax: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPad: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPadMini: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPadPro: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    iPadPro13: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    androidPhone: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    androidTablet: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    win10Phone: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    msSurface: {
        cssPixelRatio: number;
        ppi: number;
        width: number;
        height: number;
        frameWidth: number;
        frameHeight: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
    genericPhone: {
        cssPixelRatio: number;
        deviceType: string;
        title: string;
        cssClass: string;
    };
};
