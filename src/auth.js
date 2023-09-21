// Auth0ProviderWithHistory.js

import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-h2pp4b7abjxlbnb2.us.auth0.com';
  const clientId = 'd93LugcnmmdKVafEs5ezj1bxfTfb7qt3';
  const redirectUri = 'https://hngstage3-beta.vercel.app/callback';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
