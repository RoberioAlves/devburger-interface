import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer, Zoom } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle />
    <ToastContainer autoClose={2000} theme="colored" transition={Zoom} />
  </React.StrictMode>,
);
