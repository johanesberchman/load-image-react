export interface LoadImageOptions {
    canvas?: true;
    orientation?: true;
    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    sourceWidth?: number;
    sourceHeight?: number;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    contain?: boolean;
    cover?: boolean;
    aspectRatio?: number;
    pixelRatio?: number;
    downsamplingRatio?: number;
    crop?: boolean;
    crossOrigin?: boolean;
}
export declare const loadImageToCanvas: (src: string, options: LoadImageOptions) => Promise<HTMLCanvasElement>;
