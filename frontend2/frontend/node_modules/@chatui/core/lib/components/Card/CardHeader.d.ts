import React from 'react';
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    icon?: string;
    iconColor?: React.CSSProperties['color'];
    logo?: string;
    title?: string;
    desc?: string;
    hasBg?: boolean;
    badge?: string;
    children?: React.ReactNode;
}
export declare const CardHeader: (props: CardHeaderProps) => React.JSX.Element;
