import React, { useContext } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    return (
        <>
            {JSON.stringify(auth.createUser)}
            <button onClick={() => {
                auth.createUser.createUser('vinicius_beletate@devpleno.com', 'abc123')
            }}>+</button>
        </>
    )
}

export default CreateUser