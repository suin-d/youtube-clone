import React from 'react';
import styles from './video_item.module.css';

export default function VideoItem({ video, onVideoClick, display }) {
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
