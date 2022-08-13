import React, {useEffect, useState} from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);

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
    <h1>Hello:)</h1>
  );
}

export default App;
