import { Divcomponent } from "../../common/div-component";
import "./tasks.css";
export class Tasks extends Divcomponent {
  constructor(status, Appstate) {
    super();
    this.status = status;
    this.Appstate = Appstate;
  }
  loadTasks() {
    this.end = [];
    const ln = localStorage.length;
    for (let i = 1; i < ln + 1; i++) {
      let state = localStorage.getItem(i).split(",");
      if (this.status == "main") {
        this.end.push(
          state.map((e) => {
            if (e === "false") return false;
            if (e === "true") return true;
            return e;
          })
        );
      } else if (this.status == "did" && state[1] === "true") {
        this.end.push(
          state.map((e) => {
            if (e === "true") return true;
            return e;
          })
        );
      } else if (this.status == "undo" && state[1] === "false") {
        this.end.push(
          state.map((e) => {
            if (e === "false") return false;
            return e;
          })
        );
      }
    }
  }
  render() {
    this.el.innerHTML = "";
    this.el.classList.add("tasks");
    this.loadTasks();
    let html = "";
    for (let i in this.end) {
      i = Number(i);
      html += `
            <div class="task">
                <div>
                    <input type="checkbox" name="taks${i + 1}" id="${i + 1}">
                    <label for="${i + 1}">${this.end[0][0]}</label>
                </div>
                <button class="del-button"><img src="./static/bin.png" alt="корзина" class="del-png"></button>
            </div>`;
    }
    this.el.innerHTML = html;
    return this.el;
  }
}
