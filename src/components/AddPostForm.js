import React from 'react'
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap'

import { uploadPost } from '../redux/actions/posts'

const AddPostForm = (props) => (
    <>
        <h4 className="text-center mt-3">Add post form</h4>
        <Form onSubmit={(event) => submitPostHandler(event, props)} className="mt-3">
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="textarea" />
            </Form.Group>
            <Form.Group controlId="body">
                <Form.Label>Body</Form.Label>
                <Form.Control type="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </>
)

const submitPostHandler = (event, props) => {
    event.preventDefault()
    const title = event.target.elements['title'].value
    const body = event.target.elements['body'].value
    const userId = Math.floor(Math.random() * 10) + 1
    props.onAdd({ title, body, userId })
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (post) => {
            dispatch(uploadPost(post))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPostForm)
