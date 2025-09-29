import { Divcomponent } from "../../common/div-component";
import "./header.css";
export class Header extends Divcomponent {
    constructor() {
        super();
    }

    render() {
        this.el.innerHTML = "";
        this.el.classList.add("header");
        this.el.innerHTML = `
    <input id="form" type="text" placeholder="Название новой задачи">
    <button class="add-button">
    <img class="add-png" src="../../../static/add.png">
    </button>`;

        return this.el;
    }
}