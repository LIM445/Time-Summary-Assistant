import React from 'react';
import { Options } from '../../hooks/useTypewriter';
export interface TypingBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
    content: string;
    className?: string;
    isRichText?: boolean;
    options?: Options;
    messageRender?: (content: string) => string;
    onResize?: (el: HTMLDivElement) => void;
    children?: React.ReactNode;
}
export declare const TypingBubble: (props: TypingBubbleProps) => React.JSX.Element;
