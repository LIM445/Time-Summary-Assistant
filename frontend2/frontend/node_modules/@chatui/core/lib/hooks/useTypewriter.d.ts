export interface Options {
    interval?: number;
    step?: number | number[];
    initialIndex?: number;
}
export declare function useTypewriter(content: string, options?: Options): {
    typedContent: string;
    isTyping: boolean;
};
