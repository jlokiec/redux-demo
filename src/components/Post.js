import React from 'react'
import { Media } from 'react-bootstrap'

const Post = ({ post }) => (
    <Media as="li">
        <Media.Body>
            <h4>{post.title}</h4>
            <h6>{`Author: ${post.author}`}</h6>
            <p>{post.body}</p>
        </Media.Body>
    </Media>
)

export default Post
