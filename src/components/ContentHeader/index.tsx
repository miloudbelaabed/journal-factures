import { Button, Col, Row, Tag, Typography } from "antd"
import { CSSProperties } from "react"
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
  const { user, isAuthenticated, logout } = useAuth()
  return (
    <Row justify="center" style={styles.rowContainer}>
      <Col span={13}>
        <Typography.Title style={styles.title} level={3}>
          {title}
        </Typography.Title>
      </Col>

      <Col span={10}>
        {isAuthenticated && (
          <Tag color={COLOR_SECONDARY}>
            Bienvenue: {user.fullName}
            <Button
              style={{
                backgroundColor: COLOR_SECONDARY,
                color: "#fff",
                border: "none",
              }}
              onClick={logout}
            >
              <Typography.Text underline style={{ color: "white" }}>
                Déconnexion
              </Typography.Text>
            </Button>
          </Tag>
        )}
      </Col>
    </Row>
  )
}

export default ContentHeader
