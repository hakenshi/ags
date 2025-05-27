import { App } from "astal/gtk3"
import AstalHyprland from "gi://AstalHyprland?version=0.1"
import style from "./style.scss"
import Bar from "./src/widget/Bar"
import AudioWindow from "./src/widget/audio/AudioWindow"
import OSD from "./src/widget/osd/OSD"

App.start({
    main() {
        App.apply_css(style);

        App.get_monitors().map(monitor => {
            Bar(monitor)
            OSD(monitor)
        });

        AudioWindow()
    },
})