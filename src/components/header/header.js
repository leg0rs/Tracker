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
    <button class="add-button">
    <img class="add-png" src="../../../static/add.png">
    </button>`;
        this.el
            .querySelector(".add-button")
            .addEventListener("click", this.addTask.bind(this));
        return this.el;
    }
}