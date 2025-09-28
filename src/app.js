import { MainView } from "./view/main";

class App {
  routes = [
    {
      path: "",
      view: MainView,
    },
    {
      path: "#did",
      view: MainView,
    },
  ];
  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    this.route();
  }
  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routes.find((r) => r.path == location.hash).view;
    this.currentView = new view();
    this.currentView.render();
  }
}

new App();
