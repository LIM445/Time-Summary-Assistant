import React from 'react';
import { IconButtonProps } from '../IconButton';
export type NavbarProps = {
    title: string;
    className?: string;
    logo?: string;
    leftContent?: IconButtonProps;
    rightContent?: IconButtonProps[];
    rightSlot?: React.ReactNode;
    desc?: React.ReactNode;
    align?: 'left' | 'center';
};
export declare const Navbar: (props: NavbarProps) => React.JSX.Element;
