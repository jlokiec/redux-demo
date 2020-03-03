import _ from 'lodash'

import { FETCH_POSTS_START, FETCH_POSTS_ERROR, FETCH_POSTS_SUCCESS, ADD_POST } from '../actions/posts'

const initialState = {
    loading: false,
    error: undefined,
    data: []
}

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_START:
            return {
                ...state,
                loading: true,
                error: undefined
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
                data: mergePosts(state, action.payload)
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case ADD_POST:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state
    }
}

const mergePosts = (state, fetchedPosts) => {
    const posts = state.data.slice()
    fetchedPosts.forEach(fetchedPost => {
        if (!posts.find(post => post.id === fetchedPost.id)) posts.push(fetchedPost)
    })

    return posts
}

export const getPostsWithUsernames = (state) => {
    const posts = _.cloneDeep(state.posts.data)
    const users = _.cloneDeep(state.users.data)

    if (posts && posts.length > 0 && users && users.length > 0) {
        posts.forEach(post => {
            if (post.userId) {
                const author = users.find(user => user.id === post.userId)
                post.author = author.name
            }
        })
    }

    return posts
}
