import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "http://img-ys011.didistatic.com/static/didiglobal/do1_pcUZZjSG7vFlMbdr8fA6#.mp4",
    },
  ],
};

// learn more https://github.com/sampotts/plyr#the-source-setter

export const PlyrVideo = () => {
  return (
    <div>
      <Plyr source={videoSrc} />
    </div>
  );
};

export default PlyrVideo;
