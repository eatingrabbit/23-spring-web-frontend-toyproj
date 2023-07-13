import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    Link,
}from "react-router-dom"

import { MainPage } from './pages/main-page';
const router=createBrowserRouter([
    {
        path: "/",
        element: <MainPage></MainPage>,
    },
    {
        path: "/mainPage",
        element: <MainPage></MainPage>
    },
    {
        path: "/mainPage/:currentTaskId",
        element: <MainPage ></MainPage>
    },
    {
        path: "/mainPage/:currentTaskId/:currentSubtaskId",
        element: <MainPage ></MainPage>
    },
], {basename: "/23-spring-web-frontend-toyproj"});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
