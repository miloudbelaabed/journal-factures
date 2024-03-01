import { Layout } from "antd"

function Footer() {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
        boxShadow: "#d7d7d7 0px -2px 16px 0px",
        height: 100,
      }}
    >
      <p> Copyright © 2014 COSIDER GROUPE. Tous droits réservés</p>
    </Layout.Footer>
  )
}

export default Footer
