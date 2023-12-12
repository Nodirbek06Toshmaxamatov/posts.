import React, { useEffect } from 'react'
import { useState } from 'react'
import api from './api'

const App = () => {
  const [Posts,setPosts] = useState([])

  var getPosts=()=>{
    api('/posts').then((res) => setPosts(res.data))
  }
  useEffect(() =>{
    getPosts()
  }, [])
  return (
    <div className='container'>
      <div className="row">
        {
          Posts.map((item,index) => <div className='col-4' key={index}>
            <div className="card">
              <div className="card-header bg-dark text-light">
                {item.id}. {item.name}
              </div>
              <div className="card-body bg-dark text-light">
                {item.body}
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default App