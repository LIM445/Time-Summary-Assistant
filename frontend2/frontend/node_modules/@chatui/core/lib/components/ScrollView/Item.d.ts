import React from 'react';
export type ScrollViewEffect = 'slide' | 'fade' | '';
export type ScrollViewItemProps = {
    item: any;
    effect?: ScrollViewEffect;
    onIntersect?: (item?: any, entry?: IntersectionObserverEntry) => boolean | void;
};
export declare const Item: React.FC<ScrollViewItemProps>;
