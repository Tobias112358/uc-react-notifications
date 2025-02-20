import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Notification from './Notification';
import { Note } from './models';


const Notifications = ({
  notifications,
  onRequestHide,
  enterTimeout,
  leaveTimeout
}: Readonly<{
  notifications: Note[],
  onRequestHide: (notification: Note) => void,
  enterTimeout: number,
  leaveTimeout: number
}>) => {

  const className = `notification-container ${notifications.length === 0 ? 'notification-container-empty' : ''}`;

  const handleRequestHide = (notification: Note) => () => {
      onRequestHide(notification);
  };


  const items = notifications.map((notification) => {
    const key = notification.id || new Date().getTime();
    return (
      <CSSTransition
        key={key}
        classNames="notification"
        timeout={{ enter: enterTimeout, exit: leaveTimeout }}
        nodeRef={notification.nodeRef}
      >
        <Notification
          type={notification.type}
          title={notification.title ?? ""}
          message={notification.message ?? ""}
          timeOut={notification.timeOut}
          ref={notification.nodeRef}
          onClick={notification.onClick ?? (() => {})}
          onRequestHide={handleRequestHide(notification)}
        />
      </CSSTransition>
    );
  });

  return (
    <div className={className}>
      <TransitionGroup>
        {items}
      </TransitionGroup>
    </div>
  );
}

export default Notifications;
