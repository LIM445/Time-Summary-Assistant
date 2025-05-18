import React from 'react';
export interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: string;
    content?: string;
}
export declare const Bubble: React.ForwardRefExoticComponent<BubbleProps & React.RefAttributes<HTMLDivElement>>;
