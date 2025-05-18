import React from 'react';
export type ListProps = {
    className?: string;
    bordered?: boolean;
    variant?: 'buttons';
    children?: React.ReactNode;
};
export declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLDivElement>>;
