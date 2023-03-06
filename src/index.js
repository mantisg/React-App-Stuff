import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './styles.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// OLD

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App, {
//   loader as rootLoader,
//   action as rootAction,
// } from './App';
// import Game, {
//   loader as gameLoader,
//   action as gameAction,
// } from './Components/game-component'
// import reportWebVitals from './reportWebVitals';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom"
// import ErrorPage from './error-page'

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <App/>,
//       errorElement: <ErrorPage/>,
//       children: [
//         {
//           path: '/:gameId',
//           element: <Game/>,
//         },
//       ],
//     },
//   ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// reportWebVitals();


