import React, {useEffect, useState} from 'react';

import VideoList from "./components/videoList/videoList";
import SearchHeader from "./components/searchHeader/searchHeader";

import styles from  './app.module.css';

function App() {
  const [videos, setVideos] = useState([]);

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDr__XM5Fe4Y8yzUAqFoQFu3iUmSjYcDtE`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => result.items.map(item => ( { ...item, id: item.id.videoId } )))
      .then(items => setVideos(items))
      .catch(error => console.log('Error', error));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDr__XM5Fe4Y8yzUAqFoQFu3iUmSjYcDtE",
        requestOptions
    )
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('Error', error));
  }, [])

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
