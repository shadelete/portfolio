import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/Poppins-Medium.ttf'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page";
import TabsPortfolio from "./Components/Tabs/portfiolio";
import TabsSkills from "./Components/Tabs/skills";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
	  <BrowserRouter>
	  	<App/>
	  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
