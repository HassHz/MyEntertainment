import React from 'react';
import { Route } from 'react-router-dom';

import MovieList from './containers/MovieListView';
import MovieDetail from './containers/MovieDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={MovieList} />
        <Route exact path='/:movieID' component={MovieDetail} />
    </div>
);

export default BaseRouter;
