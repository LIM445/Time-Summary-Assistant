import React from 'react';
export interface QuoteProps {
    className?: string;
    author?: string;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export declare const Quote: (props: QuoteProps) => React.JSX.Element;
