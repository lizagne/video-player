import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
	// const video = props.video; this is equal to the above argument

	//set up consts here:

	//response coming back from the YouTube API
	const imageURL = video.snippet.thumbnails.default.url;

	return (
		<li onClick={ () => onVideoSelect(video) } className= "list-group-item">	
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" alt="video thumbnails" src={ imageURL }  />
				</div>
				<div className="media-body">
					<div className="media-heading">{ video.snippet.title }</div>
				</div>
			</div>
		</li>

	);
}



export default VideoListItem;