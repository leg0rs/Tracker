// # ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// # ░░░░ЗАПУСКАЕМ░ГУСЕЙ-РАЗВЕДЧИКОВ░
// # ░░░░░▄▀▀▀▄░░░▄▀▀▀▀▄░░░▄▀▀▀▄░░░░░
// # ▄███▀░◐░░░▌░▐0░░░░0▌░▐░░░◐░▀███▄
// # ░░░░▌░░░░░▐░▌░▐▀▀▌░▐░▌░░░░░▐░░░░
// # ░░░░▐░░░░░▐░▌░▌▒▒▐░▐░▌░░░░░▌░░░░
// # ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

import { DidView } from "./view/did";
import { MainView } from "./view/main";

class App {
  routes = [
    {
      path: "#main",
      view: MainView,
    },
    {
      path: "#did",
      view: DidView,
    },
  ];
  Appstate = {
    tasks: [
      {
        id: 1,
        text: "Какой-то текст задачи",
        completed: false,
      },
      {
        id: 2,
        text: "Какой-то текст задачи",
        completed: false,
      },
    ],
  };
  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    location.hash = this.routes[0].path;
    this.route();
  }
  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routes.find((r) => r.path == location.hash).view;
    this.currentView = new view(this.Appstate);
    this.currentView.render();
  }
}

new App();
