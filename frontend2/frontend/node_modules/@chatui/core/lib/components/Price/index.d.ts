import React from 'react';
export interface PriceProps {
    price: number;
    className?: string;
    locale?: string;
    currency?: string;
    original?: boolean;
    autoFit?: boolean;
}
export declare const Price: React.ForwardRefExoticComponent<PriceProps & React.RefAttributes<HTMLDivElement>>;
