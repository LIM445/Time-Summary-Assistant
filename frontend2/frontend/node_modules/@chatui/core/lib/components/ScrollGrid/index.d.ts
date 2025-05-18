import React from 'react';
export interface ScrollGridProps {
    wrap?: boolean;
    onIndicatorToggle?: (show: boolean) => void;
    children: React.ReactNode;
}
export declare function ScrollGrid({ wrap, children, onIndicatorToggle }: ScrollGridProps): React.JSX.Element;
