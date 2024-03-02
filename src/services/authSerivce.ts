 function AuthLogin(Credentials: any) {
  const { username, password } = Credentials
  if (username === "cosider" && password === "cosider") {
    return true
  }
  return false
}

export { AuthLogin }
