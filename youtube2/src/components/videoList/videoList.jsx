import React from 'react';
import VideoItem from "../videoItem/videoItem";

function VideoList({videos}) {
    return (
        <ul>
            {videos.map(video => <VideoItem key={video.id} video={video}/>)}
        </ul>
    )
}

export default VideoList