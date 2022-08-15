import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

import SearchHeader from "./components/searchHeader/searchHeader";
import VideoList from "./components/videoList/videoList";
import VideoDetail from "./components/videoDetail/videoDetail";
import styles from  './app.module.css';

const queryClient = new QueryClient();

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
  }, [youtube]);

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
