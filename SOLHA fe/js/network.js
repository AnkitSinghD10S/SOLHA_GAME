export class Network {
  static baseurl = "http:localhost:5000/api";
  constructor() {}
  getUrl(endpoint) {
    return `${baseurl}${endpoint}`;
  }
  putApiServices(params) {}
  getApiServices(params) {}
  postApiServices(params) {}

  async deleteApiServices(url) {
    const headers = {
      "Content-Type": "application/json",
    };
    const token = BrowserStorage.getUserToken();

    if (token) {
      headers["Authorization"] = "Bearer " + token;
    }

    const deleteRequest = await fetch(getUrl(endpoint), {
      method: "DELETE",
      headers: headers,
    });

    const deleteResponse = await deleteRequest.json();

    if (!deleteRequest.ok) {
    }
    return deleteResponse;
  }
}
