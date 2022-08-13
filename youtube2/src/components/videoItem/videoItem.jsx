import React from 'react';

function VideoItem({video}) {
    return (
        <h3>✅ Title: {video.snippet.title}</h3>
    )
}

export default VideoItem