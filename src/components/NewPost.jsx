import React from "react";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import api from '../api/posts'
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns'


function NewPost() {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const { posts, setPosts } = useContext(DataContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const id = posts.length ? Math.max(...posts.map(post => post.id)) + 1 : 1; // new approach to give id 
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'dd MMMM, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }

    try {
        const response = await api.post('/posts', newPost)
        const allPosts = [...posts, response.data]
        setPosts(allPosts)
        setPostTitle('')
        setPostBody('')
        navigate('/')
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

  return (
    <main className="p-3">
      <h2 className="font-semibold text-2xl mb-3">New Post</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          className="border border-black p-2 rounded mb-3"
          type="text"
          value={postTitle}
          required
          placeholder="Enter Post Title..."
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          className="border border-black p-2 rounded mb-3"
          rows='5'
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />

        <button
          className="bg-green-400 p-2 rounded text-xl font-semibold"
          type="submit"
        >Submit</button>
      </form>
    </main>
  )
}

export default NewPost;
