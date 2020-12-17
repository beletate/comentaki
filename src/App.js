import React from 'react'
import './App.css';

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'

import { AuthProvider } from './auth'


function App() {

    return (
    <AuthProvider>
      <div className='container text-center my-4'>
        <NewComment />
        <Comments />
        <SignInUser />
        <br/>
        <CreateUser />
        <UserInfo />
      </div>
    </AuthProvider>
  )
}


export default App;
