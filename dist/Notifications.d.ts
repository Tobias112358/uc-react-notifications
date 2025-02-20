import React from 'react';
import { Note } from './models';
declare const Notifications: ({ notifications, onRequestHide, enterTimeout, leaveTimeout }: Readonly<{
    notifications: Note[];
    onRequestHide: (notification: Note) => void;
    enterTimeout: number;
    leaveTimeout: number;
}>) => React.JSX.Element;
export default Notifications;
