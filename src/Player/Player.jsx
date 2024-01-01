import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Player({ url, image, title }) {
  return (
    <div>
      <div>
        <img src={image} alt="stream logo" className="w-full" />
      </div>
      <div>
        <AudioPlayer autoPlay={false} src={url} header={<span>{title}</span>} />
      </div>
    </div>
  );
}

export default Player;
