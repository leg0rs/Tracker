// # ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// # ░░░░ЗАПУСКАЕМ░ГУСЕЙ-РАЗВЕДЧИКОВ░
// # ░░░░░▄▀▀▀▄░░░▄▀▀▀▀▄░░░▄▀▀▀▄░░░░░
// # ▄███▀░◐░░░▌░▐0░░░░0▌░▐░░░◐░▀███▄
// # ░░░░▌░░░░░▐░▌░▐▀▀▌░▐░▌░░░░░▐░░░░
// # ░░░░▐░░░░░▐░▌░▌▒▒▐░▐░▌░░░░░▌░░░░
// # ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

import { DidView } from "./view/did";
import { MainView } from "./view/main";
import { UndoView } from "./view/undo";

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
    {
      path: "#undo",
      view: UndoView,
    },
  ];
  Appstate = {
    tasks: [
      {
        id: 1,
        textAndCompleted: ["Какой-то текст задачи", false],
      },
      {
        id: 2,
        textAndCompleted: ["Какой-то текст задачи", false],
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
