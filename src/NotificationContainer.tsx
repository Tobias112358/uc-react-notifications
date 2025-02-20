import React, { useEffect, useState } from 'react';
import NotificationManager from './NotificationManager';
import Notifications from './Notifications';
import { Note } from './models';

const NotificationContainer = ({
  enterTimeout=400,
  leaveTimeout=400
}: Readonly<{
  enterTimeout?: number,
  leaveTimeout?: number
}>) => {

  const [notifications, setNotifications] = useState<Note[]>([]);

  useEffect(() => {
    NotificationManager.addChangeListener(handleStoreChange);
    return () => {
      NotificationManager.removeChangeListener(handleStoreChange);
    }
  }, []);

  const handleStoreChange = (notifications: Note[]) => {
    setNotifications(notifications);
  };

  const handleRequestHide = (notification: Note) => {
    NotificationManager.remove(notification);
  };

  return (
    <Notifications
      enterTimeout={enterTimeout}
      leaveTimeout={leaveTimeout}
      notifications={notifications}
      onRequestHide={handleRequestHide}
    />
  );
};

export default NotificationContainer;
