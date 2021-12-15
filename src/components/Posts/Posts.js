import React from 'react';
import Post from './Post/Post'
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts);

    console.log(posts)
    return (
        <>
            <h3>Posts</h3>
            <Post />
            <Post />
        </>
    )
}

export default Posts