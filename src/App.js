import React, { useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  const [user, setUser] = useState(null);
  
  Auth.currentAuthenticatedUser()
    .then(setUser)
    .catch(() => setUser(null));

  return (
    <div className="App">
      <h1>Welcome to React with AWS Amplify</h1>
      {user ? <p>Hello, {user.username}</p> : <p>Please sign in</p>}
    </div>
  );
}

export default withAuthenticator(App);
