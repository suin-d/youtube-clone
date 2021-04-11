import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&q=bts&chart=mostPopular&maxResults=25&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));

    // eslint-disable-next-line
  }, []);
  // 텅빈 배열 전달하면 마운트 되었을 때 한번만 호출
  // 아무것도 전달하지 않으면 컴포넌트에 state나 prop이 업데이트될 때마다 호출
  // 선택적으로 지정하면 선택한 것이 업데이트될 때마다 호출

  return <VideoList videos={videos} />;
}

export default App;
