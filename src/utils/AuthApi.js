import Api from "./Api";

class AuthApi extends Api {
  loginUser(data) {
    return this.sendRequest("/signin", { method: "POST", body: JSON.stringify(data) });
  }

  registerUser(data) {
    return this.sendRequest("/signup", { method: "POST", body: JSON.stringify(data) });
  }
}

export default AuthApi;