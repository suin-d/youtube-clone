import React, { memo } from 'react';
import styles from './video_item.module.css';

function VideoItem({ video, onVideoClick, display }) {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{video.snippet.title}</p>
          <p className={styles.channel}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
}

// videoitem은 props(video, onVideoClick, display)가 바뀌지 않으면 리렌더링 될 이유가 없음
export default memo(VideoItem);
