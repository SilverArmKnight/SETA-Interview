import { useEffect } from 'react'
import NewPost from './components/NewPost'
import Posts from './components/Posts'
import postService from './services/posts'
import { setPosts } from './reducers/postReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()   
  useEffect(() => {
    postService
      .getAll().then(posts => dispatch(setPosts(posts)))
  }, [dispatch])

  return (
    <div>
      <h1>Create a new post</h1>
      <NewPost />
      <h1>All posts</h1>
      <Posts />
    </div>
  )
}

export default App