import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const pages = [
  {
    label: "關於 anco",
    key: "AboutUs",
    icon: <MailOutlined />,
  },
  {
    label: "派餅",
    key: "Pie",
    icon: <AppstoreOutlined />,
  },
  {
    label: "甜點",
    key: "Dessert",
    icon: <SettingOutlined />,
  },
  {
    label: "聯繫我",
    key: "ContentUs",
    icon: <MailOutlined />,
  },
];

function Navbar() {
  const [current, setCurrent] = useState("");

  const renderedNavLink = pages.map((page) => {
    return {
      ...page,
      label: (
        <NavLink to={page.key} key={page.key}>
          {page.label}
        </NavLink>
      ),
    };
  });

  const handleClick = (event) => {
    setCurrent(event.key);
  };

  const navbarClassName = `w-full grid grid-cols-2 gap-x-3 bg-gradient-to-r from-emerald-700 to-teal-200 sticky top-0 z-50`;

  return (
    <div className={navbarClassName}>
      <div className="self-center text-white text-2xl p-2">ANCO dessert</div>
      <div className="flex justify-end">
        <Menu
          className="bg-inherit"
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={renderedNavLink}
        />
      </div>
    </div>
  );
}

export default Navbar;
