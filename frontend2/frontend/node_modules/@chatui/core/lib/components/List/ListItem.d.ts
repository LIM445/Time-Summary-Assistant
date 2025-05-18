import React from 'react';
interface ListItemPropsBase {
    className?: string;
    as?: React.ElementType;
    content?: React.ReactNode;
    ellipsis?: boolean;
    rightIcon?: string;
    onClick?: (event: React.MouseEvent) => void;
    children?: React.ReactNode;
}
interface ListItemPropsWithLink extends ListItemPropsBase {
    as: 'a';
    href: string;
}
export type ListItemProps = ListItemPropsBase | ListItemPropsWithLink;
export declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLElement>>;
export {};
