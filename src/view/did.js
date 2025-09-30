import { AbstractView } from "../common/view.js";
import onChange from "on-change";
import { Header } from "../components/header/header.js";
import { RadioButton } from "../components/radio-button/radio-button.js";
export class DidView extends AbstractView {
  state = {
    inputdata: undefined,
  };
  l;
  constructor(Appstate) {
    super();
    this.Appstate = Appstate;
    this.Appstate = onChange(this.Appstate, this.appStateHook.bind(this));
    this.setTitle("Планировщик задач");
  }

  appStateHook(path) {
    if (path === "tasks") {
      localStorage.clear();
      for (let i of this.Appstate.tasks) {
        localStorage.setItem(i.id, i.textAndCompleted);
      }
      console.log(localStorage.getItem(1).split(","));
    }
    // this.render();
  }
  render() {
    this.app.innerHTML = "";
    const main = document.createElement("div");
    main.classList.add("main");
    main.append(new Header().render());
    main.append(new RadioButton("did").render());
    this.app.append(main);
  }
}
