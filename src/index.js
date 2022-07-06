import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {MoralisProvider} from 'react-moralis';
import { EbayProvider } from './context/EbayContext';

const serverUrl = process.env.REACT_APP__MORALIS_SERVER;
const appID = process.env.REACT_APP__MORALIS_APP_ID;
console.log(appID,serverUrl);

ReactDOM.render(
  <MoralisProvider 
  serverUrl={serverUrl}
  appId={appID}
  >
  <BrowserRouter>
  <EbayProvider>
    <App />
    </EbayProvider>
  </BrowserRouter>
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
