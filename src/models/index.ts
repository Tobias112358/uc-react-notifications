import { RefObject } from "react";

export enum NotificationType {
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Error = 'error'
}

export interface Note {
    id: string,
    type: NotificationType,
    title?: string,
    message?: string,
    timeOut: number,
    nodeRef: RefObject<HTMLDivElement>,
    onClick?: NotificationClick,
    priority?: boolean
}

export interface NotificationProps {
    type: NotificationType,
    title?: string,
    message?: string,
    timeOut: number,
    onClick: NotificationClick,
    onRequestHide: () => void
}

export type NotificationClick = () => void | ((notification: Note) => void);