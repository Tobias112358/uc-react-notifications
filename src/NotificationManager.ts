import { EventEmitter } from 'events';
import React, { RefObject } from 'react';
import { Note, NotificationClick, NotificationType } from './models';


const createUUID = (): string => {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
};

class NotificationManager extends EventEmitter {
  listNotify: Note[];
  constructor() {
    super();
    this.listNotify = [];
  }

  create(notify: Note) {
    const defaultNotify: Note = {
      id: createUUID(),
      type: NotificationType.Info,
      timeOut: 5000,
      nodeRef: React.createRef<HTMLDivElement>() as RefObject<HTMLDivElement>
    };
    if (notify.priority) {
      this.listNotify.unshift(Object.assign(defaultNotify, notify));
    } else {
      this.listNotify.push(Object.assign(defaultNotify, notify));
    }
    this.emitChange();
  }

  info(
    message: string | undefined, 
    title: string | undefined, 
    timeOut: number, 
    onClick: NotificationClick, 
    priority: boolean
  ) {
    this.create({
      type: NotificationType.Info,
      message,
      title,
      timeOut,
      onClick,
      priority
    } as Note);
  }

  success(
    message: string | undefined, 
    title: string | undefined, 
    timeOut: number, 
    onClick: NotificationClick, 
    priority: boolean
  ) {
    this.create({
      type: NotificationType.Success,
      message,
      title,
      timeOut,
      onClick,
      priority
    } as Note);
  }

  warning(
    message: string | undefined, 
    title: string | undefined, 
    timeOut: number, 
    onClick: NotificationClick, 
    priority: boolean
  ) {
    this.create({
      type: NotificationType.Warning,
      message,
      title,
      timeOut,
      onClick,
      priority
    } as Note);
  }

  error(
    message: string | undefined, 
    title: string | undefined, 
    timeOut: number, 
    onClick: NotificationClick, 
    priority: boolean
  ) {
    this.create({
      type: NotificationType.Error,
      message,
      title,
      timeOut,
      onClick,
      priority
    } as Note);
  }

  remove(notification: Note) {
    this.listNotify = this.listNotify.filter((n) => notification.id !== n.id);
    this.emitChange();
  }

  removeAll() {
    this.listNotify.length = 0;
    this.emitChange();
  }

  emitChange() {
    this.emit('change', this.listNotify);
  }

  addChangeListener(callback: (notifications: Note[]) => void) {
    this.addListener('change', callback);
  }

  removeChangeListener(callback: (notifications: Note[]) => void) {
    this.removeListener('change', callback);
  }
}

export default new NotificationManager();
