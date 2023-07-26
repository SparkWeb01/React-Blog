import React, { useEffect, useRef, useState } from "react";
import PostFilter from "./../components/PostFilter";
import Postform from "./../components/Postform";
import PostList from "./../components/PostList";
import MyButton from "./../components/UI/Button/MyButton";
import MyModal from "./../components/UI/MyModal/MyModal";
import { usePost } from "./../hooks/usePost";
import './../styles/App.css'
import PostService from "./../API/PostService";
import Loader from "./../components/UI/Loader/Loader";
import { useFetching } from "./../hooks/useFetching";
import { getPageCount} from "./../utils/pages";
import Pagination from "./../components/UI/Pagintaion/Pagination";

function Posts() {
  const[posts, setPosts] = useState([])
  const [modal, setModal] = useState('')
  const [filter, setFilter] = useState({sort:'', query:''}) 
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)
  const lastElement = useRef()
  const observer = useRef()
  const [fetchPosts, isPostLoading, postError] = useFetching( async (limit, page) =>{
    const response = await PostService.getAll(limit, page)
    setPosts([...posts,...response.data])
    const totalCount = response.headers['x-total-count'] 
    setTotalPages(getPageCount(totalCount, limit))
  } )

 /*  useEffect(()=>{
    var callback = function(entries, observer) {
        if(entries[0].isIntersecting){
          console.log(page)
          setPage(page+1)
        }  
      };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  }, [isPostLoading])*/

  
// Create post
  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
  }

// delete post in PostList
  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

// получаем посты
  useEffect(() =>{
    fetchPosts(limit, page)
  }, [page])
  
  const changePage = (page) =>{
    setPage(page)
  }

  return (
    <div className="App">
      <MyButton style={{marginTop:'40px'}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <Postform create={createPost}/>
      </MyModal>
      <hr style={{margin:'15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}/>
      {postError &&
        <h1>Произошла ошибка, код ошибки ${postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список Постов'}/>
      {/*<div ref={lastElement} style={{height:'20px', background:'red'}}></div>*/}
      {isPostLoading &&
       <div style={{display:'flex', justifyContent: 'center'}}><Loader/></div>
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;
