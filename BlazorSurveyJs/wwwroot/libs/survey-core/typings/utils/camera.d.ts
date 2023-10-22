export declare class Camera {
    static mediaDevicesCallback: ((callback: (devices: Array<MediaDeviceInfo>) => void) => void) | undefined;
    static clear(): void;
    static setCameraList(list: Array<MediaDeviceInfo>): void;
    private static cameraList;
    private static cameraIndex;
    private static cameraFacingMode;
    private static canSwitchFacingMode;
    hasCamera(callback: (res: boolean) => void): void;
    getMediaConstraints(videoEl?: any): MediaStreamConstraints;
    startVideo(videoElementId: string, callback: (stream: MediaStream) => void, imageWidth?: string, imageHeight?: string): void;
    snap(videoElementId: string, callback: BlobCallback): boolean;
    private canFlipValue;
    private updateCanFlipValue;
    private onCanFlipChangedCallback?;
    canFlip(onCanFlipChangedCallback?: (res: boolean) => void): boolean;
    flip(): void;
    private hasCameraCallback;
    private setVideoInputs;
}
