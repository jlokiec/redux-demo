import axios from 'axios'

export const FETCH_USERS_START = 'FETCH_USERS_START'
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'

const fetchUsersStart = () => {
    return {
        type: FETCH_USERS_START
    }
}

const fetchUsersError = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

const fetchUsersSuccess = (posts) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: posts
    }
}

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersStart())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => dispatch(fetchUsersSuccess(response.data)))
            .catch(error => dispatch(fetchUsersError(error)))
    }
}
