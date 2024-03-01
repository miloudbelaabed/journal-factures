async function AuthLogin(Credentials: any) {
  const { username, password } = Credentials
  if (username === "cosider" && password === "cosider") {
    return Promise.resolve({ name: "walid" })
  }
}

export { AuthLogin }
