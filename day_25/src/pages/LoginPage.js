import React from 'react';

const CLIENT_ID = '1031546748960-hens455a2r040vbvpasdf37alrcjfe9g.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3000/callback'; // Replace with your redirect URI

const SCOPES = ['openid']; // Specify the desired scopes

const LoginPage = () => {
    const handleLogin = () => {
        const params = new URLSearchParams({
          client_id: CLIENT_ID,
          redirect_uri: REDIRECT_URI,
          response_type: 'code',
          scope: SCOPES.join(' '),
          access_type: 'offline',
          prompt: 'consent',
        });
    
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
        window.location.href = authUrl; 
      };


  return (
    <div className='main-wrapper'>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default LoginPage;
