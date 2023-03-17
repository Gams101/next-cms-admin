import axios, { AxiosInstance } from "axios";

export class AuthService {
  protected readonly instance: AxiosInstance;

  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Time out!",
    });
  }

  login = async (email: string, password: string) => {
    let { data } = await this.instance.post<{ access_token: string, token_type: string; }>('login', {email, password});

    localStorage.setItem("access_token", data.access_token)
    localStorage.setItem("token_type", data.token_type)
  }

  logout = async () => {
    await this.instance.post('logout');
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
