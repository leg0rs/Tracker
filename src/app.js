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
        textAndCompleted: ["Написать первую задачу", false],
      },
    ],
  };
  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    location.hash = this.routes[0].path;
    if (!localStorage.length) {
      this.loadBase();
    }
    this.loadAppstate();
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
  loadBase() {
    localStorage.clear();
    for (let i of this.Appstate.tasks) {
      localStorage.setItem(i.id, i.textAndCompleted);
    }
  }
  loadAppstate() {
    this.Appstate.tasks = [];
    const ln = localStorage.length;
    for (let i = 1; i < ln + 1; i++) {
      let state = localStorage.getItem(i).split(",");
      state = state.map((e) => {
        if (e === "false") return false;
        if (e === "true") return true;
        return e;
      });
      this.Appstate.tasks.push({ id: i, textAndCompleted: state });
    }
  }
}

new App();
