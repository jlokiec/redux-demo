import axios from 'axios'

export const FETCH_POSTS_START = 'FETCH_POSTS_START'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const ADD_POST = 'ADD_POST'

const fetchPostsStart = () => {
    return {
        type: FETCH_POSTS_START
    }
}

const fetchPostsError = (error) => {
    return {
        type: FETCH_POSTS_ERROR,
        payload: error
    }
}

const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsStart())
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => dispatch(fetchPostsSuccess(response.data)))
            .catch(error => dispatch(fetchPostsError(error)))
    }
}

export const uploadPost = (post) => {
    return dispatch => {
        dispatch(addPost(post))
    }
}
