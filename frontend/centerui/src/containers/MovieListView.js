import React from 'react';
import axios from 'axios';

import Movies from '../components/Movie';
import CustomMovieForm from '../components/Form';

class MovieList extends React.Component {

    state = {
        movies: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/movies/api/')
            .then(res => {
                this.setState({
                    movies: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <Movies data={this.state.movies}/>
                <h2>Register a Movie</h2>
                <CustomMovieForm requestType="POST"/>
            </div>
        );
    };
}

export default MovieList;
