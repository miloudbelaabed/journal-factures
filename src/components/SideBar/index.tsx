import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Menu, theme } from "antd"
import Sider from "antd/es/layout/Sider"

import { MenuProps } from "antd/lib"
import React, { useState } from "react"
import { Link } from "react-router-dom"

type MenuItem = Required<MenuProps>["items"][number]

function SideBar() {
  const [collapsed, setCollapsed] = useState(false)
  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    isAdvancedUser?: boolean,
    type?: "group"
  ): MenuItem {
    return { key, icon, children, label, type } as MenuItem
  }
  const items: MenuItem[] = [
    getItem(
      "",
      "1",
      collapsed ? (
        <MenuUnfoldOutlined onClick={handleCollapse} />
      ) : (
        <MenuFoldOutlined onClick={handleCollapse} />
      )
    ),
    getItem(<Link to="/">Accueil</Link>, "2", <HomeOutlined />),
  ]

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={320}
      style={{ background: colorBgContainer }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
        items={items}
      />
    </Sider>
  )
}

export default SideBar
