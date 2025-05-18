import React from 'react';
export type RateActionsProps = {
    upTitle?: string;
    downTitle?: string;
    onClick: (value: string) => void;
};
export declare const RateActions: React.FC<RateActionsProps>;
