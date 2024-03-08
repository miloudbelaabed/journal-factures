import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Row,
  Space,
  Tag,
  Typography,
} from "antd"
import { CSSProperties } from "react"
import {
  DownOutlined,
  ProfileOutlined,
  SettingOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Link } from "react-router-dom"
import { MenuProps } from "antd/lib"
import { COLOR_PRIMARY2, COLOR_SECONDARY } from "../../config/constants"
import { useAuth } from "../../contexts/AuthContext"

const styles: { [key: string]: CSSProperties | undefined } = {
  rowContainer: {
    backgroundColor: COLOR_PRIMARY2,
    height: 50,
    alignItems: "center",
    textAlign: "right",
  },
  title: {
    color: "white",
    margin: 0,
  },
}

function ContentHeader({ title }: { title: string }) {
  const { isAuthenticated, logout } = useAuth()
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to="profile">Profile</Link>,
      icon: <ProfileOutlined />,
    },
    {
      key: "2",
      label: <Link to="/settings">Settings</Link>,
      icon: <SettingOutlined />,
    },
    {
      key: "3",
      label: <a onClick={logout}>Deconnextion</a>,
      danger: true,
    },
  ]

  return (
    <Row justify="center" style={styles.rowContainer}>
      <Col span={13}>
        <Typography.Title style={styles.title} level={3}>
          {title}
        </Typography.Title>
      </Col>

      <Col span={10}>
        {isAuthenticated && (
          <Dropdown menu={{ items }}>
            <Space>
              <Avatar size={45} icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        )}
      </Col>
    </Row>
  )
}

export default ContentHeader
