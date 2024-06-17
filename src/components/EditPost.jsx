import React, { useEffect, useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import api from '../api/posts';
import { format } from "date-fns";

const EditPost = () => {
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const [postFound, setPostFound] = useState(true); // New state variable
    const { posts, setPosts } = useContext(DataContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        } else {
            setPostFound(false); // Set postFound to false if the post is not found
        }
    }, [post]);

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'dd MMMM, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);
            setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
            setEditTitle('');
            setEditBody('');
            navigate('/');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };

    return (
        <main className="p-3">
            {postFound ? ( // Check postFound instead of editTitle
                <>
                    <h2 className="font-semibold text-2xl mb-3">Edit Post</h2>
                    <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            className="border border-black p-2 rounded mb-3"
                            type="text"
                            value={editTitle}
                            required
                            placeholder="Enter Post Title..."
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            className="border border-black p-2 rounded mb-3"
                            rows='5'
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button
                            className="bg-green-400 p-2 rounded text-xl font-semibold"
                            type="submit"
                            onClick={() => handleEdit(post.id)}
                        >Submit</button>
                    </form>
                </>
            ) : (
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p className="text-purple-400 hover:underline">
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            )}
        </main>
    );
};

export default EditPost;
