import { Divcomponent } from "../../common/div-component";
import "./header.css";
export class Header extends Divcomponent {
  constructor(Appstate) {
    super();
    this.Appstate = Appstate;
  }
  addTask(input) {
    this.Appstate.tasks.push({
      id: localStorage.length + 1,
      textAndCompleted: [input.value, false],
    });
  }
  render() {
    this.el.innerHTML = "";
    this.el.classList.add("header");
    this.el.innerHTML = `
    <input id="form" type="text" placeholder="Название новой задачи">
    <button class="add-button deativate" disabled>
    <img class="add-png" src="../../../static/add.png">
    </button>`;
    const button = this.el.querySelector(".add-button");
    const form = this.el.querySelector("#form");
    button.addEventListener("click", this.addTask.bind(this, form));
    form.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && form.value) {
        this.addTask(form);
      }
    });
    form.addEventListener("input", () => {
      if (form.value) {
        button.classList.remove("deativate");
        button.disabled = false;
      } else {
        button.classList.add("deativate");
        button.disabled = true;
      }
    });
    return this.el;
  }
}
