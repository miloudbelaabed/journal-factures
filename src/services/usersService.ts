import API from "../api/instance"

async function getFactures() {
  return API.get("invoicesapi/db.json").then((res) => res.data)
}

export default getFactures
