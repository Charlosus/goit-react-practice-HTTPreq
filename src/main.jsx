import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppLoader } from './AppLoader.jsx';
import { AppErrors } from './AppErrors.jsx';
import AppForms from './Forms/AppForms.jsx';
import { AppRefCycle } from './4-Ref/AppRef.jsx';
import { AppValueRef } from './4-Ref/AppRef.jsx';
import { AppPlayer, Player } from './4-Ref/AppRef.jsx';
import { AppForward } from './4-Ref/AppRef.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppLoader /> */}
    {/* <AppErrors /> */}
    {/* <AppApiRequest /> */}
    {/* <AppForms /> */}
    {/* <AppRefCycle /> */}
    {/* <AppValueRef /> */}
    {/* <AppPlayer /> */}
    <AppForward />
  </React.StrictMode>
);
