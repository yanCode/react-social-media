import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
import {DarkModeContextProvider} from "./context/DarkModeContext";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <DarkModeContextProvider>
     <App/>
   </DarkModeContextProvider>
  </React.StrictMode>
);
