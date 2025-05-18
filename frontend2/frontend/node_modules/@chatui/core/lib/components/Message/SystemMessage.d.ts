import React from 'react';
export type SystemMessageProps = {
    className?: string;
    content: string;
    action?: {
        text: string;
        onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        once?: boolean;
        disabled?: boolean;
    };
};
export declare const SystemMessage: (props: SystemMessageProps) => React.JSX.Element;
