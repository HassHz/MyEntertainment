import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import axios from 'axios';
  
class CustomMovieForm extends React.Component {

    handleFormSubmit = (event, requestType, movieID) => {
        const title = event.target.elements.title.value;
        const url = event.target.elements.url.value;
        const watched = event.target.elements.watched.checked;

        if (requestType === 'POST') {
            axios.post('http://127.0.0.1:8000/movies/api/', {
                title: title,
                url: url,
                watched: watched
            })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        } else if (requestType === 'PUT') {
            axios.put(`http://127.0.0.1:8000/movies/api/${movieID}/`, {
                title: title,
                url: url,
                watched: watched
            })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        } else {
            console.log('Unexpected requestType: ' + requestType);
        }
    }

    render() {
        return (
            <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.movieID)}>
            <Form.Item label="Title">
                <Input name="title"/>
            </Form.Item>
            <Form.Item label="URL">
                <Input name="url" />
            </Form.Item>
            <Form.Item>
                <Checkbox name="watched">Watched</Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
            </Form>
        );
    }
}

export default CustomMovieForm;
