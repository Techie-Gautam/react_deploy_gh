import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
    return (
        <article className="px-3 py-4 border-t-2 flex flex-col gap-3">
            <Link to={`/post/${post.id}`}>
                <h2 className="text-2xl">{post.title}</h2>
                <p>{post.datetime}</p>
            </Link>
            <p>
                {(post.body).length <= 25
                    ? post.body
                    : `${(post.body).slice(0, 25)}...`
                }
            </p>
        </article>
    )
}

export default Post;
