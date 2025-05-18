import React from 'react';
export type SendConfirmProps = {
    file: Blob;
    onCancel: () => void;
    onSend: () => void;
};
export declare const SendConfirm: React.FC<SendConfirmProps>;
