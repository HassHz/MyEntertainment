import React from 'react';
import { Route } from 'react-router-dom';

import MovieList from './containers/MovieListView';
import MovieDetail from './containers/MovieDetailView';
import AllMoviesList from './containers/AllMoviesList';

const BaseRouter = () => (
    <div>
        <Route exact path='/mymovies' component={MovieList} />
        <Route exact path='/movies' component={AllMoviesList} />
        <Route exact path='/mymovies/:movieID' component={MovieDetail} />
    </div>
);

export default BaseRouter;
