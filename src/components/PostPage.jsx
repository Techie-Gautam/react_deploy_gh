
import { useParams, Link, useNavigate } from "react-router-dom";
import api from '../api/posts'
import { useContext } from "react";
import DataContext from "../context/DataContext";

function PostPage() {
  const { posts, setPosts } = useContext(DataContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const post = posts.find(post => (post.id).toString() === id)

  const handleDelete = async (id) => {
    try {
        await api.delete(`/posts/${id}`)
        const postList = posts.filter(post => post.id !== id)
        setPosts(postList)
        navigate('/')
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}


  return (
    <main>
      <article className="p-3">
        {post &&
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <div className="flex gap-3">
              <Link
                to={`/edit/${post.id}`}>
                <button
                  className="p-3 bg-green-400 w-fit rounded text-white tracking-wider border border-black"
                >Edit Post</button>
              </Link>

              <button
                className="p-3 bg-red-400 w-fit rounded text-white tracking-wider border border-black"
                onClick={() => handleDelete(post.id)}
              >
                Delete Post
              </button>

            </div>
          </div>
        }
        {!post &&
          <>
            <h2>Post Not Found</h2>
            <p>Well, thats's disappointing.</p>
            <p>
              <Link to='/'>Visit Our Homepage</Link>
            </p>
          </>}
      </article>
    </main>
  )
}

export default PostPage;
