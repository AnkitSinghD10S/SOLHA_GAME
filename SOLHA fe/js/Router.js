export class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentCSS = [];
    this.init();
  }

  init() {
    // add listerner to check for route change
    window.addEventListener("hashchange", () => this.onRouteChange(), false);

    // call the route change function(first render)
    this.onRouteChange();
  }

  async onRouteChange() {
    

    const pathname = window.location.hash.substring(1);
    const route = this.routes[pathname] || this.routes.default;
    const cssFiles = route.css || [];
    const htmlData = await fetch(route.path);
    const html = await htmlData.text();

    document.getElementById("app").innerHTML = html;
    this.updateCSS(cssFiles);
    this.updateJS(route.class);
    
  }

updateCSS(cssFiles){
  this.currentCSS.forEach((css) => document.head.removeChild(css));
    this.currentCSS = [];
  for (let i = 0; i < cssFiles.length; i++) {
    const cssFile = cssFiles[i];
    const linkElement = document.createElement("Link");
    linkElement.type = "text/css";
    linkElement.rel = "stylesheet";
    linkElement.href = cssFile;
    document.head.appendChild(linkElement);
    this.currentCSS.push(linkElement);
  }
}

updateJS(JsClass){
  if(JsClass){
    new JsClass(this);
  }
}

}