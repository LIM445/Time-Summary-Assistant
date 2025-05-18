import React from 'react';
export type FormItemProps = {
    label?: string | React.ReactNode;
    help?: string;
    required?: boolean;
    invalid?: boolean;
    hidden?: boolean;
};
export declare const FormItem: React.FC<FormItemProps>;
