import { Divcomponent } from "../../common/div-component";
import "./radio-button.css";
export class RadioButton extends Divcomponent {
  constructor(station) {
    super();
    this.state = station;
  }
  changeState(state) {
    if (state.target.id) {
      location.hash = `#${state.target.id}`;
    }
  }
  render() {
    this.el.innerHTML = "";
    this.el.classList.add("radio-button");
    this.el.innerHTML = `        
        <input type="radio" name="cat" id="main" 
        ${this.state === "main" ? "checked" : ""}>
        <label for="main">Все</label>
        <input  type="radio" name="cat" id="did" 
        ${this.state === "did" ? "checked" : ""}>
        <label for="did">Выполненные</label>
        <input type="radio" name="cat" id="undo" 
        ${this.state === "undo" ? "checked" : ""}>
        <label for="undo">Невыполненные</label>`;
    this.el.addEventListener("click", (e) => {
      this.changeState(e);
    });
    return this.el;
  }
}
