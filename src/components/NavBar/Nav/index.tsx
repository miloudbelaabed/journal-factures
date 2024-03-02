import { Layout } from "antd"

import { COLOR_PRIMARY2 } from "../../../config/constants"

const styles = {
  navbar: {
    height: "20vh",
    backgroundColor: "transparent",
    padding: 0,
  },
  header: {
    display: "flex",
    alignItems: "center",
    // justifyContent: 'center',
    padding: 0,
    backgroundColor: "#fff",
    height: "100px",
  },
  fnposLogo: {
    width: "200px",
    height: "100px",
    backgroundImage: "url(./logo-cosider.png)",
    backgroundSize: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  items: {
    width: "80%",
    textAlign: "center" as const,
    color: `${COLOR_PRIMARY2}`,
  },
  parag: {
    margin: "0",
    fontSize: 23,
    lineHeight: "1.3",
    textAlign: "left" as const,
    color: "black",
    fontWeight: "bolder",
  },
  btn: {
    border: "none",
    color: COLOR_PRIMARY2,
    boxShadow: "none",
    fontWeight: "bold",
    fontSize: 14,
    margin: 0,
    cursor: "pointer",
  },
}

function NavBar() {
  return (
    <Layout>
      <Layout.Header style={styles.header}>
        <div style={styles.fnposLogo} />

        <div style={styles.items}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={styles.parag}>Journale des factures</p>
          </div>
        </div>

        {/* <div style={styles.aps} /> */}
      </Layout.Header>
    </Layout>
  )
}

export default NavBar
