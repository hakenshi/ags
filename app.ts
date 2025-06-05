import { App } from "astal/gtk3"
import AstalHyprland from "gi://AstalHyprland?version=0.1"
import style from "./style.scss"
import Bar from "./src/Bar"
import AudioWindow from "./src/widget/audio/AudioWindow"
import OSD from "./src/widget/osd/OSD"
import WifiMenu from "./src/widget/wifi/WifiMenu"
import SettingsWindow from "./src/widget/settings/window"

App.start({
    main() {
        App.apply_css(style);

        App.get_monitors().map(monitor => {
            Bar(monitor)
            OSD(monitor)
            SettingsWindow(monitor)
        });
        AudioWindow()
    },
})