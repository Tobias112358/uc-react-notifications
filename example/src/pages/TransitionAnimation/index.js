import React from 'react';
import Document from '../../components/Document.js';
import { NotificationContainer, NotificationManager } from '../../../../dist/uc-react-notifications.js';

import './notifications.scss';

class TransitionAnimationPage extends React.Component {
  createNotification = (type) => () => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Success message', 'Title here');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <Document
        title="Transition & Animation | React notifications"
        className="page-transition-animation"
      >
        <div>
          <div className="page-header">
            <h1>Transition & animation</h1>
          </div>
          <button type="button" className="btn btn-info" onClick={this.createNotification('info')}>
            Info
          </button>
          <hr/>
          <button type="button" className="btn btn-success" onClick={this.createNotification('success')}>
            Success
          </button>
          <hr/>
          <button type="button" className="btn btn-warning" onClick={this.createNotification('warning')}>
            Warning
          </button>
          <hr/>
          <button type="button" className="btn btn-danger" onClick={this.createNotification('error')}>
            Error
          </button>

          <NotificationContainer enterTimeout={800} leaveTimeout={500}/>
        </div>
      </Document>
    );
  }
}

export default TransitionAnimationPage;
