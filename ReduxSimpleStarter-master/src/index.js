import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const api_key = 'AIzaSyAuQCVeNfKhRk9klChQPT1n027DP0_5Ss';
YTSearch({key: api_key, term:'surfboards'}, function(data){
    console.log(data);
});


const App = () => {
    return <div>Hi</div>
}


ReactDOM.render(<App />, document.querySelector('.container'));
ReactDOM.render(<SearchBar />, document.querySelector('.container'));
