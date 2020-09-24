import * as React from "react";
import { LoadImageOptions } from "./load-image-to-canvas";
interface ImageProps {
    src: string;
    loadOptions?: LoadImageOptions;
}
export declare class Image extends React.Component<ImageProps> {
    private container;
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: ImageProps): Promise<void>;
    render(): JSX.Element;
    private renderImage;
}
export {};
