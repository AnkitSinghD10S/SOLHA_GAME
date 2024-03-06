export class Router {
  constructor(routes) {
    this.routes = routes;
    this.init();
  }

  init() {
    // add listerner to check for route change

    // call the route change function(first render)
    this.onRouteChange();
  }

  async onRouteChange() {
    const PATHNAME = window.location.hash.replace("#", "");
    const route = this.routes[PATHNAME] || this.routes.default;
    const htmlData = await fetch(route.path);
    const html = await htmlData.text();
    document.getElementById("app").innerHTML = html;
  }
}
