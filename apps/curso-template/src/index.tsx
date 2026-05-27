import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QuestionsProvider } from './contexts/QuestionsContext';
import './index.css';
import { App } from './modules';
import reportWebVitals from './reportWebVitals';

const rootElement = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]);

rootElement.render(
  <React.StrictMode>
    <QuestionsProvider>
      <RouterProvider router={router} />
    </QuestionsProvider>
  </React.StrictMode>
);

reportWebVitals();
