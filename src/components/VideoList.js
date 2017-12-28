//this is a parent of VideoListItem and VideoDetail

//this has no need to measure state so just needs to be a dumb functional component

import React from 'react';
import VideoListItem from './VideoListItem';

//Because we want the JSX element of VideoList which we call in it's parent to use props, because it has to use the state that is held in the parent App, we want to put in the argument of Props so it knows it can use it in the higher level component. it would be written like this: <VideoList videos={ this.state.videos }


//Props: in a functional based component, props has to be passed in as an arguement, but in a class based component, we have to specify props with this.props.
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem video= { video }/>
	});

	return (

		<ul className= "col-md-4 list-group">
			{ videoItems }
		</ul>
	)
};

export default VideoList;