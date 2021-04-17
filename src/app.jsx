import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/common/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  const loadMostPopular = () => {
    youtube
      .mostPopular()
      .then((videos) => setVideos(videos));
      setSelectedVideo(null);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);
  // 텅빈 배열 전달하면 마운트 되었을 때 한번만 호출
  // 아무것도 전달하지 않으면 컴포넌트에 state나 prop이 업데이트될 때마다 호출
  // 선택적으로 지정하면 선택한 것이 업데이트될 때마다 호출

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} mostPopular={loadMostPopular}/>
      {/* onSearch가 발생하면 search 호출 */}
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={handleSelectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
