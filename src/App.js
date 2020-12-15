import React from 'react'
import './App.css';

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'

import { AuthProvider } from './auth'

function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser/>
      </div>
    </AuthProvider>
  );
}

export default App;
