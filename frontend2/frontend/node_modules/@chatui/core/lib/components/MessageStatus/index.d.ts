import React from 'react';
export type IMessageStatus = 'pending' | 'sent' | 'fail';
type StatusType = '' | 'loading' | 'fail';
export interface MessageStatusProps {
    status: IMessageStatus;
    delay?: number;
    maxDelay?: number;
    retryInterval?: number;
    onRetry?: (isAutoRetry?: boolean) => void;
    onChange?: (type: StatusType) => void;
}
export declare const MessageStatus: ({ status, delay, maxDelay, retryInterval, onRetry, onChange, }: MessageStatusProps) => React.JSX.Element | null;
export {};
