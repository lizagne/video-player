import _ from 'lodash'; //that's how you call in lodash, to set up throttling
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

import './styles/style.css'

//holding the YouTube key:
const API_KEY = 'AIzaSyDEopTvv94ZF--tQ4R2J5hoozO_BnlgKyE';

//the app needs to keep track of the list of videos, so has to be a class based component

class App extends Component {	

	constructor(props) {
		super(props);

		this.state = { 
			videos: [], //needs to be an empty array because it's going to be a list
			selectedVideo: null
		}

		this.videoSearch('Simpsons');
	}

	//VideoList needs to get access to the videos from the state from App. We pass the list of videos by defining a property on the JSX tag

	//set up a callback function which holds the info from the YouTube API
	videoSearch(term){
		//setup a test search using the api //this is a network request, the first render of the component is going to be set to 0 or null, 
		YTSearch({ key: API_KEY, term: term }, videos => {
		this.setState({ videos: videos, selectedVideo: videos[0] }) //this calls the data that we need and it's an array of objects //I've shortened the last line from this.setState({ videos: videos})
		});	
	}


	//below on SearchBar we set up a function that says, when Searchbar calls onSearchTermChange it will take the term 
	render() {
	//debounce takes the inner function and returns a new function which can only be called every 300 milliseconds
	const videoSearch = _.dbounce((term) => { this.videoSearch(term) }, 300);
		
		return (
			<div>
				<SearchBar 
					onSearchTermChange={ videoSearch }
					/>
				<VideoDetail video={ this.state.selectedVideo } />
				<VideoList 
					onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
					videos={ this.state.videos } />
			</div>	

		)
	}
	
}


ReactDOM.render(<App/>, document.getElementById('root'));