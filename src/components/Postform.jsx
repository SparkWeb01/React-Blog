import React, { useState } from 'react'
import MyButton from './UI/Button/MyButton'
import MyInput from './UI/Input/MyInput'

const Postform = ({create}) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) =>{
      e.preventDefault()
      const newPost = {
          ...post, id: Date.now()
      }
      create(newPost)
      setPost({ title: '', body: '' })
  }

  return (
    <div>
        <form>
        <MyInput
        placeholder="Название поста"
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text"
        />
        <MyInput
        placeholder="Описание поста"
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text"
        />
        
        <MyButton 
        onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  )
}

export default Postform