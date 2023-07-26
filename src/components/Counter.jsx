import React, { useState } from 'react'

const Counter = () => {
  const [likes, setLikes] = useState(0)
  function increment(){
    setLikes(likes + 1)
  }
  function decrement(){
    if (likes>=1) {
      setLikes(likes - 1)
    }
  }
  return (
    <div>
      <h1>{likes} лайков на посте</h1>
      <button onClick={increment}>Лайк</button>
      <button onClick={decrement}>Дизлайк</button>
    </div>
  )
}

export default Counter