import React from 'react';
import Document from '../../components/Document.js';
import { NotificationContainer, NotificationManager } from '../../../../dist/uc-react-notifications.js';

class HomePage extends React.Component {
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
      <Document title="Home | React notifications" className="page-home">
        <div>
          <div className="page-header">
            <h1>Simple sample</h1>
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

          <NotificationContainer/>
        </div>
      </Document>
    );
  }
}

export default HomePage;
