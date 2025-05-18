interface StartOptions {
    delay?: number;
    timeout?: number;
}
export declare function useTitleTyping(): {
    isTyping: boolean;
    start: ({ delay, timeout }?: StartOptions) => void;
    stop: () => void;
};
export {};
