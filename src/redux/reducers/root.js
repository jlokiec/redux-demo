import { combineReducers } from 'redux';
import { users } from './users'
import { posts } from './posts'

export const root = combineReducers({ users, posts })
