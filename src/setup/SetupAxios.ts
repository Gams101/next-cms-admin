import { authService } from "@/services";
import { AxiosInstance } from "axios";

export default function setupAxios(axios: AxiosInstance) {
  axios.defaults.withCredentials = true;

  axios.defaults.baseURL = process.env.APP_API_URL || '';

  axios.interceptors.request.use(
    (config: any) => {
      const accessToken = authService.getToken();

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (err: any) => Promise.reject(err)
  );

  axios.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error: any) => {
      switch (error.response.status) {
        case 401:
        case 403:
          window.location.replace('/logout');
          break;
        default:
          break;
      }
    }
  );
}
