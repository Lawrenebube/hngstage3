import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
// import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';
import Auth0ProviderWithHistory from './auth';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0ProviderWithHistory>

    <App />
    </Auth0ProviderWithHistory>,

);


