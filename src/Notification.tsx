import React, { forwardRef, Ref, useEffect } from 'react';
import { NotificationProps } from './models';
import './notifications.css';

const Notification = forwardRef(({
  type,
  title,
  message,
  timeOut=5000,
  onClick,
  onRequestHide
}: Readonly<NotificationProps>, 
  nodeRef: Ref<HTMLDivElement>
) => {

  const className = `notification notification-${type}`;

  useEffect(() => {
    const timer = timeOut !== 0 ? setTimeout(onRequestHide, timeOut) : null;

    return () => {
      if(timer) {
        clearTimeout(timer)
      }
    };
  }, []);

  const handleClick = () => {
    onClick();
    onRequestHide();
  };

  return (
    <div className={className} onClick={handleClick} ref={nodeRef}>
      <div className="notification-message" role="alert">
        <h4 className="title">{title}</h4>
        <div className="message">{message}</div>
      </div>
    </div>
  );

});

export default Notification;
