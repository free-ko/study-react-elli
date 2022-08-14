import React, {useCallback, useEffect, useState} from 'react';

import SearchHeader from "./components/searchHeader/searchHeader";
import VideoList from "./components/videoList/videoList";
import VideoDetail from "./components/videoDetail/videoDetail";

import styles from  './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  }

  const search = useCallback(query => {
    youtube.search(query)
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  }, []);

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
        { selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
          </div>
        )}

        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
