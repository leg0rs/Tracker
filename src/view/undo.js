import { AbstractView } from "../common/view.js";
import onChange from "on-change";
import { Header } from "../components/header/header.js";
import { RadioButton } from "../components/radio-button/radio-button.js";
import { Tasks } from "../components/tasks/tasks.js";
export class UndoView extends AbstractView {
  state = {
    inputdata: undefined,
  };
  constructor(Appstate) {
    super();
    this.state = "undo";
    this.Appstate = Appstate;
    this.Appstate = onChange(this.Appstate, this.appStateHook.bind(this));
    this.setTitle("Планировщик задач");
  }

  appStateHook(path) {
    if (path.slice(0, 5) === "tasks") {
      localStorage.clear();
      for (let i of this.Appstate.tasks) {
        localStorage.setItem(i.id, i.textAndCompleted);
      }
    }
    this.render();
  }
  render() {
    const main = document.createElement("div");
    main.classList.add("main");
    main.append(new Header(this.Appstate).render());
    main.append(new RadioButton(this.state).render());
    main.append(new Tasks(this.state, this.Appstate).render());
    this.app.innerHTML = "";
    this.app.append(main);
  }
}
