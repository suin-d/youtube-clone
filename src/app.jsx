import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/common/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube.search(query).then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);
  // 텅빈 배열 전달하면 마운트 되었을 때 한번만 호출
  // 아무것도 전달하지 않으면 컴포넌트에 state나 prop이 업데이트될 때마다 호출
  // 선택적으로 지정하면 선택한 것이 업데이트될 때마다 호출

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
