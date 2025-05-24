import { App } from "astal/gtk3"
import style from "./style.scss"
import Bar from "./widget/Bar"

App.start({
    main() {
        App.set_gtk_theme("Adwaita-dark")
        App.apply_css(style);
        App.get_monitors().map(Bar);
    },
})
