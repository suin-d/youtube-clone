import React from 'react';

export default function VideoItem(props) {
  return (
    <div>
      <h1>{props.video.snippet.title}</h1>
    </div>
  );
}
