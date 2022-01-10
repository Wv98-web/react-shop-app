import React from "react";
import { Badge, TabBar } from "antd-mobile";
import { useHistory, useLocation } from "react-router-dom";
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

function Footer() {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    history.push(value);
  };

  const tabs = [
    {
      key: "/home",
      title: "首页",
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: "/NotFound",
      title: "我的待办",
      icon: <UnorderedListOutline />,
      badge: "5",
    },
    {
      key: "/cart",
      title: "我的消息",
      icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
      badge: "99+",
    },
    {
      key: "/user",
      title: "个人中心",
      icon: <UserOutline />,
    },
  ];

  return (
    <footer className="footer">
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </footer>
  );
}

export default Footer;
