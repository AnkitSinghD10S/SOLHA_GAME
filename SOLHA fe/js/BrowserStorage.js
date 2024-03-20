export class BrowserStorage {
  constructor() {}

  static getUserToken() {
    return localStorage.getItem("auth_token") || null;
  }
}
