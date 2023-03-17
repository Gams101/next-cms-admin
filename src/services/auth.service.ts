import axios from "axios";

export class AuthService {

  login = async (email: string, password: string) => {
    let { data } = await axios.post<{ access_token: string, token_type: string; }>('login', { email, password });

    localStorage.setItem("access_token", data.access_token)
    localStorage.setItem("token_type", data.token_type)
  }

  logout = async () => {
    await axios.post('logout');
    localStorage.removeItem("access_token");
  }

  isUserLoggedIn = (): boolean => {
    if (localStorage.getItem("access_token") != null) {
      return true;
    }
    return false;
  }

  getToken = () => {
    return localStorage.getItem("access_token");
  }
}
