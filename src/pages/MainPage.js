import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import AddPostForm from '../components/AddPostForm'
import PostList from '../components/PostList'

const MainPage = () => (<Container>
    <Row className="justify-content-md-center">
        <Col xs="8">
            <PostList />
        </Col>
        <Col xs="4">
            <AddPostForm />
        </Col>
    </Row>
</Container>)

export default MainPage
