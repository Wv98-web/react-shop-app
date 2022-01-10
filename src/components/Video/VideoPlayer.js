import React, { useMemo, useState, useEffect } from "react";
import videojs from "video.js";
// //样式文件注意要加上
import "video.js/dist/video-js.css";

const VideoPlayer = (props) => {
  const [videoNode, setVideoNode] = useState();
  const [player, setPlayer] = useState();

  const url = "http://img-ys011.didistatic.com/static/didiglobal/do1_pcUZZjSG7vFlMbdr8fA6#.mp4";

  // rtmp播放
  useMemo(() => {
    if (videoNode) {
      const videoJsOptions = {
        controls: true,
        responsive: true,
        fluid: true,
        autoplay: true, // 自动播放
        language: "zh-CN",
        preload: "auto", // 自动加载
        errorDisplay: true, // 错误展示
        width: 475, // 宽
        height: 300,
        flash: {
          swf: "/video-js.swf",
        },
        sources: [
          {
            src: url,
            type: "video/mp4", // 类型可加可不加，目前未看到影响
          },
        ],
        poster: "../../assets/monkey.jpg",
      };
      const videoPlayer = videojs(videoNode, videoJsOptions);
      setPlayer(videoPlayer);
    }
  }, [videoNode]);

  useEffect(() => {
    return () => {
      if (player) player.dispose();
    };
  }, []);

  return (
    <>
      <div style={{ margin: 50 }}>
        <p>播放器</p>

        <video
          ref={(node) => {
            setVideoNode(node);
          }}
          id="videoPlay"
          className="video-js vjs-default-skin vjs-big-play-centered"
          width="100%"
          height="100%"
        >
          <track kind="captions" />
          <p className="vjs-no-js">您的浏览器不支持HTML5，请升级浏览器。</p>
        </video>
      </div>
    </>
  );
};

export default VideoPlayer;
