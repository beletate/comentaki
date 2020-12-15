import React, { useContext } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    return (
        <React.Fragment>
            {JSON.stringify(auth.createUser)}
            <button onClick={() => {
                auth.createUser.createUser('vinicius_beletate@devpleno.com', 'abc123')
            }}>+</button>
        </React.Fragment>
    )
}

export default CreateUser