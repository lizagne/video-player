import React from 'react';

const VideoDetail = ({ video }) => {

	if(!video){
		return <div>Loading...</div>;
	}//otherwise run the rest of the code

	const videoId = video.id.videoId;
	const url = `http://www.youtube.com/embed/${videoId}`; //this is instead of cocatenation, using backticks and using a variable and JSX.

	return (
		<div className="video-detail col-md-8">

			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={ url } title={ video.snippet.title }></iframe>
			</div>	

			<div className="details">
				<div className="video-title">{ video.snippet.title }</div>
				<div>{ video.snippet.description }</div>
			</div>
		</div>
	)
};

export default VideoDetail;