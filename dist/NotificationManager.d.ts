import { EventEmitter } from 'events';
import { Note, NotificationClick } from './models';
declare class NotificationManager extends EventEmitter {
    listNotify: Note[];
    constructor();
    create(notify: Note): void;
    info(message: string | undefined, title: string | undefined, timeOut: number, onClick: NotificationClick, priority: boolean): void;
    success(message: string | undefined, title: string | undefined, timeOut: number, onClick: NotificationClick, priority: boolean): void;
    warning(message: string | undefined, title: string | undefined, timeOut: number, onClick: NotificationClick, priority: boolean): void;
    error(message: string | undefined, title: string | undefined, timeOut: number, onClick: NotificationClick, priority: boolean): void;
    remove(notification: Note): void;
    removeAll(): void;
    emitChange(): void;
    addChangeListener(callback: (notifications: Note[]) => void): void;
    removeChangeListener(callback: (notifications: Note[]) => void): void;
}
declare const _default: NotificationManager;
export default _default;
