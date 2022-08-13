import React from 'react';
import VideoItem from "../videoItem/videoItem";
import styles from './videoList.module.css'


function VideoList({videos}) {
    return (
        <ul className={styles.videos}>
            {videos.map(video => <VideoItem key={video.id} video={video}/>)}
        </ul>
    )
}

export default VideoList