import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppLoader } from './AppLoader.jsx';
import { AppErrors } from './AppErrors.jsx';
import AppForms from './Forms/AppForms.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppLoader /> */}
    {/* <AppErrors /> */}
    {/* <AppApiRequest /> */}
    <AppForms />
  </React.StrictMode>
);
