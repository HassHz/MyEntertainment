import React from 'react';

import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';

class AllMoviesList extends React.Component {

    state = {
        searchResults: {}
    }

    handleSearch = (results) => {
        this.setState({searchResults: results});
        console.log(this.state.searchResults)
    }

    render() {
        return (
            <div>
                <SearchBar placeholder="Search Movie" searchType="movie" onSearchSubmit={this.handleSearch} />
                <SearchResultsList movies={this.state.searchResults} />
            </div>
        );
    };
}

export default AllMoviesList;
