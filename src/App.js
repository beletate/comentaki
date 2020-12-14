import React, { useState, useEffect } from 'react'
import './App.css';

import firebase from './firebase'

const useDatabase = endpoint => {
  const [data, setData] = useState({})

  useEffect(() => {
    const ref = firebase.database().ref(endpoint)
    ref.on('value', snapshot => {
      setData(snapshot.val())
    })
    return () => {
      ref.off()
    }
  }, [endpoint])
  return data
}

const useDataBasePush = endpoint => {
  const [status, setStatus] = useState('')

  const save = data => {
    const ref = firebase.database().ref(endpoint)
    ref.push(data, err => {
      if(err){
        setStatus('ERROR')
      }else{
        setStatus('SUCCESS')
      }
    })
  }
  return [status, save]
}

const Comment = ({comment}) => {
  return (
    <div>
      {comment.content} por: {comment.user.name}
    </div>
  )
}

const Comments = () => {
  const data = useDatabase('comments')
  if(!data){
    return <p>Nenhum comentário enviado até o momento!</p>
  }

  const ids = Object.keys(data)
  if(ids.length === 0){
    return <p>Carregando...</p>
  }

  return ids.map(id => {
    return <Comment key={id} comment={data[id]}/>
  })
}

function App() {
  const [, save] = useDataBasePush('comments')

  return (
    <div>
      <button onClick={() => {
        save({
          content: 'olá aqui é meu comentário',
          user:{
            id: '1',
            name:'Vinicius'
          }
        })
      }}>Toggle</button>
      <Comments/>
    </div>
  );
}

export default App;
