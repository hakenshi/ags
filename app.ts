import { App } from "astal/gtk3"
import AstalHyprland from "gi://AstalHyprland?version=0.1"
import style from "./style.scss"
import Bar from "./src/widget/Bar"
import AudioWindow from "./src/widget/audio/AudioWindow"

const hyprland = AstalHyprland.get_default()

App.start({
    main() {
        App.apply_css(style);
        // App.reset_css()
        App.get_monitors().map(Bar);
        AudioWindow()
    },
})