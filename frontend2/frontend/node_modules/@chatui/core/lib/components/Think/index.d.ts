import React from 'react';
export interface ThinkProps {
    className?: string;
    isDone?: boolean;
    thinkTime?: number;
    children?: React.ReactNode;
}
export declare const Think: ({ className, isDone, thinkTime, children }: ThinkProps) => React.JSX.Element;
