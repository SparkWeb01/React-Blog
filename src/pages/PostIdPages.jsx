import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

const PostIdPages = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching( async(id) => {
      const response = await PostService.getById(id)
      setPost(response.data)
  })
  const [comments, setComments] = useState([])
  const [fetchComments, isComLoading, comError] = useFetching( async(id) => {
    const response = await PostService.getCommnetsByPostId(id)
    setComments(response.data)
  })
  useEffect( () => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [] )
  return (
    <div>
       <h1>Пользователь попал на страницу поста с ID : {params.id}</h1>
       <div>
           { isLoading
           ? <Loader/>
           : <div>{post.id}. {post.title} </div>
           }
           { isComLoading
           ? <Loader/>
           : <div>
               {comments.map(comm => 
                <div style={{marginTop: 20}}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
                )}
             </div>
           }
       </div>
    </div>
  )
}

export default PostIdPages