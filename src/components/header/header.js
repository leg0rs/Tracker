import { Divcomponent } from "../../common/div-component";
import "./header.css";
export class Header extends Divcomponent {
  constructor() {
    super();
  }
  addTask() {
    console.log(1);
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

    button.addEventListener("click", this.addTask.bind(this));

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
