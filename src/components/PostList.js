import React from 'react'
import { connect } from 'react-redux';
import { Alert, Button, Spinner } from 'react-bootstrap'

import Post from './Post';
import { fetchUsers } from '../redux/actions/users'
import { fetchPosts } from '../redux/actions/posts';
import { getPostsWithUsernames } from '../redux/reducers/posts'

const PostList = ({ loading, posts, error, onFetch }) => {
    return (
        <>
            <div className="mt-3 text-center">
                <Button onClick={onFetch}>Download posts and users</Button>
            </div>
            <p className="mt-3">{`Post count: ${posts.length}`}</p>
            {loading ? displaySpinner() : null}
            {error ? displayError(error) : null}
            {posts.length > 0 && !error ? displayPosts(posts) : null}
        </>
    )
}

const displaySpinner = () => (
    <div className="text-center">
        <Spinner animation="border" />
    </div>
)

const displayPosts = (posts) => (
    <ul className="list-unstyled">
        {posts.map((post, i) => <Post post={post} key={i} />)}
    </ul>
)

const displayError = (error) => (
    <Alert variant="danger">{error.message}</Alert>
)

const mapStateToProps = (state) => {
    return {
        posts: getPostsWithUsernames(state),
        loading: state.users.loading && state.posts.loading,
        error: state.users.error || state.posts.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchUsers())
            dispatch(fetchPosts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
