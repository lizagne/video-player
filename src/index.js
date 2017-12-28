import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

//holding the YouTube key:
const API_KEY = 'AIzaSyDEopTvv94ZF--tQ4R2J5hoozO_BnlgKyE';

const App = () => (
	
	<div>
		<div> Hi! </div>
		<SearchBar />
	</div>	
)


ReactDOM.render(<App/>, document.getElementById('root'));