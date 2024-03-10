import { Router } from "./js/Router.js";
import { Index } from "./js/pages/index.js";
import { Login } from "./js/pages/login.js";
import { Signup } from "./js/pages/signup.js";

const routes = {
  "": { path: "html/index.html",css:["css/index.css"],class: Index},
  login: { path: "html/login.html",css:["css/login.css"] , class :Login}, 
  signup: { path: "html/signup.html",css :["css/signup.css"] , class :Signup},
  default: { path: "html/index.html" ,css:["css/index.css"],class :Index},
};

class Main {
  constructor() {
    this.router= new Router(routes);
  }
}

new Main();
