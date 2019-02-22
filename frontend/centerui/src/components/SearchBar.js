import React from 'react';
import { Input } from 'antd';
import axios from 'axios';

const Search = Input.Search;

class SearchBar extends React.Component {

    getSearchResults = (value) => {
        axios.post('http://127.0.0.1:8000/search/', {
                searchType: this.props.searchType,
                searchText: value
            })
            .then(res => {
                console.log(res)
                this.props.onSearchSubmit(res.data)
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <Search
                placeholder={this.props.placeholder}
                onSearch={(value) => this.getSearchResults(value)}
                style={{ width: 400 }}
                enterButton
            />
        );
    }
}

export default SearchBar;
