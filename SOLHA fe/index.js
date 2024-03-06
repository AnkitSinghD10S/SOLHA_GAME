import { Router } from "./js/Router.js";

const routes = {
  "": { path: "html/index.html" },
  login: { path: "html/login.html"}, 
  signup: { path: "html/signup.html" },
  default: { path: "html/index.html" },
};

class Main {
  constructor() {
    this.router= new Router(routes);
  }
}

new Main();
