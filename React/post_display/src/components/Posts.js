import { useSelector } from 'react-redux'

const Post = (props) => {
  return (
		<div>
			<h3>{props.title}</h3>
			<p>{props.body}</p>
		</div>
	)
}

const Posts = () => {
	const posts = useSelector(state => state.posts)

	return (
		<div>
			{posts.map(post => 
				<Post 
					key={post.id}
					title={post['title']}
					body={post['body']}
				/>)}
		</div>
	)
}

export default Posts