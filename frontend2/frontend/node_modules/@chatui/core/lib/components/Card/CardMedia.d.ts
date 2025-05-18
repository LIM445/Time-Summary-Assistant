import React from 'react';
export type CardMediaProps = {
    className?: string;
    aspectRatio?: 'square' | 'wide';
    color?: string;
    image?: string;
};
export declare const CardMedia: React.FC<CardMediaProps>;
