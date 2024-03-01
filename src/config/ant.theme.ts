import { ConfigProviderProps } from "antd/lib/config-provider"
import { ThemeConfig } from "antd/es/config-provider/context"
import frFR from "antd/locale/fr_FR"
import { COLOR_PRIMARY2 } from "./constants"

const appTheme: ThemeConfig = {
  token: {
    colorPrimary: COLOR_PRIMARY2,

    fontFamily: "Cairo, sans-serif",
    fontSize: 14,
    colorLink: COLOR_PRIMARY2,

    // colorBgContainer: '#232A34',
    // colorBgLayout,
    // borderRadius: 0
  },
  components: {
    Input: {
      borderRadius: 0,
    },
    Switch: {
      colorPrimary: "#6CD86B",
      colorPrimaryHover: "#458846",
    },
    Table: {},
  },
}

const defaultAppConfig: ConfigProviderProps = {
  theme: appTheme,
  direction: "ltr",
  locale: frFR,
}

export default defaultAppConfig
