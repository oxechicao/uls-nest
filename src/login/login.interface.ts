export interface LoginInterface {
  authenticate: () => string;
  login: () => string;
  refreshToken: () => string;
}
