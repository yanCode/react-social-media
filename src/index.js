import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
import {DarkModeContextProvider} from "./context/DarkModeContext";
import {AuthContextProvider} from "./context/authContext";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App/>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
