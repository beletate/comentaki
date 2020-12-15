import React from 'react'
import './App.css';

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'

import { AuthProvider } from './auth'

function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
        <UserInfo />
      </div>
    </AuthProvider>
  )
}

export default App;
