import { notification } from "antd"

export default function useOpenNotification() {
  const [api, contextHolder] = notification.useNotification()
  const openNotification = (
    message: string,
    description: string,

    type = "info"
  ) => {
    switch (type) {
      case "info":
        return api.info({
          message,
          description,
          placement: "top",
        })
      case "error":
        return api.error({
          message,
          description,
          placement: "top",
        })
      case "warning":
        return api.warning({
          message,
          description,
          placement: "top",
        })
      case "success":
        return api.success({
          message,
          description,
          placement: "top",
        })
      default:
        return api.info({
          message,
          description,
          placement: "top",
        })
    }
  }
  const context = () => contextHolder
  return { openNotification, context }
}
