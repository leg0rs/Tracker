import { AbstractView } from "../common/view.js";
import onChange from "on-change";
import { Header } from "../components/header/header.js";
export class MainView extends AbstractView {
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
                console.log(i);
                localStorage.setItem(i.id, i.text);
            }
        }
        this.render();
    }
    render() {
        const header = new Header().render();
        this.app.prepend(header);
        // this.Appstate.tasks.push({
        //     id: 3,
        //     text: "Какой-то текст задачи2",
        //     completed: false,
        // });
        // this.Appstate.tasks.splice(1, 1);
    }
}