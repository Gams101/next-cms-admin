import { AuthService } from "./auth.service";

export const authService = new AuthService(process.env.APP_API_URL || '')
