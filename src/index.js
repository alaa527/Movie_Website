import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Provider } from 'react-redux';
import mystore from './store/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={mystore}>
      <App/>
      </Provider>
 
  
    </BrowserRouter>
  
  </React.StrictMode>
  
);


