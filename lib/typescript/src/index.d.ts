interface IRotateImage {
    content?: string;
    type: 'file' | 'base64';
    angle: number;
}
export declare function rotate(params?: IRotateImage): Promise<string>;
export {};
//# sourceMappingURL=index.d.ts.map