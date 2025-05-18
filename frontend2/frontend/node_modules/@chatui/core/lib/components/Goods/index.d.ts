import React from 'react';
import { IconButtonProps } from '../IconButton';
import { ButtonProps } from '../Button';
type TagProps = {
    name: string;
};
type GoodsVariant = 'normal' | 'inList' | 'compact';
export type GoodsRef = HTMLDivElement;
export interface GoodsProps extends React.HTMLAttributes<GoodsRef> {
    className?: string;
    type?: 'goods' | 'order';
    img?: string;
    name: string;
    desc?: React.ReactNode;
    tags?: TagProps[];
    locale?: string;
    currency?: string;
    price?: number;
    originalPrice?: number;
    meta?: React.ReactNode;
    count?: number;
    unit?: string;
    status?: string;
    variant?: GoodsVariant;
    action?: ButtonProps | IconButtonProps;
    elderMode?: boolean;
    asideContent?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const Goods: React.ForwardRefExoticComponent<GoodsProps & React.RefAttributes<HTMLDivElement>>;
export {};
