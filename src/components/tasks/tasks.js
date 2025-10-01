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
      let state = [].concat(localStorage.getItem(i).split(","), [i]);
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
  tasksRender() {
    this.el.innerHTML = "";
    this.el.classList.add("tasks");
    this.loadTasks();
    let html = "";
    for (let i in this.end) {
      i = Number(i);
      let id = this.end[i][2];
      html += `
            <div class="task">
                <div class="leftS">
                    <input type="checkbox" name="taks${id}" id="${id}" class="taskInp" ${
        this.end[i][1] ? "checked" : ""
      }>
                    <label for="${id}">${this.end[i][0]}</label>
                </div>
                <button class="del-button" id="${id}"><img src="./static/bin.png" alt="корзина" class="del-png"></button>
            </div>`;
    }

    html += `
        <div>
        <p>Осталось ${this.end.reduce(
          (acc, val) => (val[1] == false ? (acc += 1) : (acc += 0)),
          0
        )} задач</p>
        </div>`;

    this.el.innerHTML = html;
  }
  inputEvent() {
    const inputs = this.el.querySelectorAll(".taskInp");
    for (const input of inputs) {
      input.addEventListener("click", () => {
        let id = input.id;
        const foundIndex = this.end.findIndex(
          (e) => String(e[2]) === String(id)
        );
        if (foundIndex !== -1) {
          id = foundIndex;
        }
        this.Appstate.tasks[input.id - 1].textAndCompleted = [
          this.end[id][0],
          input.checked,
        ];
      });
    }
  }

  buttonEvent() {
    const buttons = this.el.querySelectorAll(".del-button");
    for (let button of buttons) {
      button.addEventListener("click", () => {
        const deleteId = Number(button.id);
        const newTasks = this.Appstate.tasks
          .filter((t) => Number(t.id) !== deleteId)
          .map((t, idx) => {
            return Object.assign({}, t, { id: idx + 1 });
          });

        this.Appstate.tasks = newTasks;
      });
    }
  }
  render() {
    this.tasksRender();
    this.inputEvent();
    this.buttonEvent();
    return this.el;
  }
}
