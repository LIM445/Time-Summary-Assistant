import React from 'react';
export type TabsProps = {
    className?: string;
    index?: number;
    scrollable?: boolean;
    hideNavIfOnlyOne?: boolean;
    onChange?: (index: number, event: React.MouseEvent) => void;
};
export declare const Tabs: React.FC<TabsProps>;
