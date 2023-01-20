import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import {store} from './Redux/store';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    
    <Auth0Provider
    domain="dev-qw0t3p2bxikhvxjm.us.auth0.com"
    clientId="itt9njFaT9Gbc0efUtQxUaxtsvFWYPjx"
    authorizationParams={{
        redirect_uri: window.location.origin
      }}>
        <BrowserRouter>
        <Provider store={store}>
      
            <ChakraProvider>
           
                <App />
                
            </ChakraProvider>
    
        </Provider>
        </BrowserRouter>
        </Auth0Provider>
   
     
);
