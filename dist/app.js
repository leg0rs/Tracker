(function () {
  'use strict';

  class AbstractView {
    constructor() {
      this.app = document.getElementById("root");
    }
    setTitle(title) {
      document.title = title;
    }
    render() {
      return;
    }
    destroy() {
      return;
    }
  }

  class MainView extends AbstractView {
    constructor() {
      super();
      this.setTitle("План задач");
    }
    render() {
      const main = document.createElement("div");
      main.innerHTML = "test";
      this.app.innerHTML = "";
      this.app.append(main);
    }
  }

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

})();
