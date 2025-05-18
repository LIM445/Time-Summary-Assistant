import React from 'react';
export type ClickOutsideProps = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    mouseEvent?: 'click' | 'mousedown' | 'mouseup';
};
export declare const ClickOutside: React.FC<ClickOutsideProps>;
