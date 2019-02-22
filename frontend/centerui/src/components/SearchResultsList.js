import React from 'react';
import { List, Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const SearchResultsList = (props) => {
    var movie_list = [];
    if (props.movies.hasOwnProperty("search_results")) {
        movie_list = props.movies.search_results.results;
    }
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={movie_list}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                    <List.Item.Meta
                        title={item.title}
                        description={item.overview}
                    />
                    {item.overview}
                </List.Item>
            )}
        />
    );
};

export default SearchResultsList;
