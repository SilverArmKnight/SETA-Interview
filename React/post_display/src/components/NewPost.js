// The only place that uses Redux.
import { useDispatch } from 'react-redux'
import { createPost } from '../reducers/postReducer'

const NewPost = () => {
	const dispatch = useDispatch()

	const addPost = (event) => {
		event.preventDefault()
		
		// Extract inputs from form.
		const title = event.target.title.value
		const body = event.target.body.value

		console.log('title:', title)
		console.log('body:', body)
	
		// Set the inputs in form back to empty.
		event.target.title.value = ''
		event.target.body.value = ''
		
		dispatch(createPost([title, body]))
	}

	return (
		<form onSubmit={addPost}>
			<div>title <input name='title'/></div>
			<div>body <input name='body'/></div>
			<p><button type="submit">Post</button></p>
		</form>
	)
}

export default NewPost
