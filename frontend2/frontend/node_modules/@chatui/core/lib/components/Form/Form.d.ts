import React from 'react';
export type FormProps = {
    className?: string;
    /** @deprecated Use `<Input>`'s `variant` instead */
    theme?: string;
};
export declare const ThemeContext: React.Context<string>;
export declare const Form: React.FC<FormProps>;
