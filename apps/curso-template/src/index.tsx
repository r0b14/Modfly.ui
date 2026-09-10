import React from 'react';
import ReactDOM from 'react-dom/client';
import '@modfly/ui/styles.css';
import '@modfly/ui-avamec/styles.css';
import './index.css';
import { App } from './modules';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><App /></React.StrictMode>);
