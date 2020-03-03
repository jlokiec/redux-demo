import { FETCH_USERS_START, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from '../actions/users'

const initialState = {
    loading: false,
    error: undefined,
    data: []
}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_START:
            return {
                ...state,
                loading: true,
                error: undefined
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
                data: action.payload
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
