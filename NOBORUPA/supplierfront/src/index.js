// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading="null" persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root")
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();
