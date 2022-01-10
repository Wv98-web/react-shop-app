import React from "react";
import { NavBar, Swiper, Toast } from "antd-mobile";
import PlyrVideo from "../../components/Video/plyr";

function Home() {
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className="content"
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ));

  return (
    <div className="home">
      <div className="container">
        <header>
          <NavBar back={null}>首页</NavBar>
        </header>

        <Swiper autoplay autoplayInterval={1000} loop={true}>
          {items}
        </Swiper>

        <PlyrVideo />
      </div>
    </div>
  );
}

export default Home;
