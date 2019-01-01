import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd';
import CustomMovieForm from '../components/Form';

class MovieDetail extends React.Component {

    state = {
        movie: {}
    }

    componentDidMount() {
        const movieID = this.props.match.params.movieID;
        axios.get(`http://127.0.0.1:8000/movies/api/${movieID}`)
            .then(res => {
                this.setState({
                    movie: res.data
                });
            })
    }

    handleDelete = (event) => {
        const movieID = this.props.match.params.movieID;
        axios.delete(`http://127.0.0.1:8000/movies/api/${movieID}`)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <Card title={this.state.movie.title}>
                    <p>{this.state.movie.url}</p>
                </Card>
                <br />
                <h3>Update Details</h3>
                <CustomMovieForm requestType="PUT" movieID={this.props.match.params.movieID}/>
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        );
    };
}

export default MovieDetail;
