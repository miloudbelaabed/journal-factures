import { Button, Col, Form, Input, Row, Typography, message } from "antd"

import { useNavigate } from "react-router-dom"
import { CSSProperties } from "react"
import { useAuth } from "../../contexts/AuthContext"
import ContentHeader from "../../components/ContentHeader"
import { COLOR_PRIMARY2 } from "../../config/constants"

const styles: { [key: string]: CSSProperties | undefined } = {
  rowContainer: {
    backgroundColor: COLOR_PRIMARY2,
    height: 50,
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    color: "white",
    margin: 0,
  },
}
function LoginPage() {
  const navigate = useNavigate()
  const { login, loading } = useAuth()
  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    try {
      const res = login(values)

      if (res) {
        navigate("/", { replace: true })
      } else {
        message.error("Echec : vérifier nom d'utilisateur et mot de pass")
      }
    } catch (error: any) {
      message.error("Echec : vérifier nom d'utilisateur et mot de pass")
    }
    // finally {
    //   setLoading(false);
    // }
  }

  const colSpan = {
    xs: 20,
    md: 16,
    lg: 14,
    xl: 12,
    xxl: 8,
  }

  return (
    <>
      <Row justify="center" style={styles.rowContainer}>
        <Col span={24}>
          <Typography.Title style={styles.title} level={3}>
            Journal de facture Cosider
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col
          {...colSpan}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 50,
            paddingTop: 50,
            paddingBottom: 50,
            paddingLeft: 20,
            paddingRight: 30,
            background: "#fff",
            borderRadius: 20,
            margin: "80px 0px",
            marginTop: "10vh",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <Row style={{ justifyContent: "center" }}>
            <Col>
              <Typography.Title
                level={2}
                style={{ justifyContent: "center", color: `${COLOR_PRIMARY2}` }}
              >
                Se connecter
              </Typography.Title>
            </Col>
          </Row>
          <Typography.Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Username:cosider | Password: cosider
          </Typography.Text>
          <Form
            onFinish={onFinish}
            labelCol={{ span: 4 }}
            labelAlign="left"
            form={form}
            validateTrigger="onBlur"
            scrollToFirstError={{
              behavior: "smooth",
            }}
            validateMessages={{
              required: "Champ obligatoire",
            }}
          >
            <Form.Item
              name="username"
              label="Utilisateur :"
              rules={[{ required: true }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Mot de passe :"
              rules={[{ required: true }]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                loading={loading}
                size="large"
                type="primary"
                htmlType="submit"
              >
                Connexion
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default LoginPage
