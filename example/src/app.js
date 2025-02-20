import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.js';

import 'bootstrap/dist/css/bootstrap.css';
//import '../../src/notifications.scss';
import './assets/styles/app.scss';

const run = () => {
  const root = createRoot(document.getElementById('app'));
  root.render(<App/>);
};

window.addEventListener('DOMContentLoaded', run);
