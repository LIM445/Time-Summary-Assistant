import React from 'react';
export type EmptyProps = {
    className?: string;
    type?: 'error' | 'default';
    image?: string;
    tip?: string;
};
export declare const Empty: React.FC<EmptyProps>;
