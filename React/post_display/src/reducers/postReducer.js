import { createSlice } from '@reduxjs/toolkit'

const generateId = () =>
  Number((Math.random() * 1000000 + 101).toFixed(0))

  const postSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {

      createPost(state, action) {
        const title = action.payload[0]
        const body = action.payload[1]

        state.push({
          title,
          body,
          important: false,
          id: generateId(),
        })
      },

      appendPost(state, action) {
        state.push(action.payload)
      },

      setPosts(state, action) {
        return action.payload
      }

    }, 
  })

export const { createPost, appendPost, setPosts } = postSlice.actions
export default postSlice.reducer