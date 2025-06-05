import { App } from "astal/gtk3"
import Bar from "./src/Bar"
import AudioWindow from "./src/widget/audio/AudioWindow"
import OSD from "./src/widget/osd/OSD"
import style from "./style.scss"
import DashboardWindow from "./src/widget/dashboard/window"

App.start({
    main() {
        App.apply_css(style);

        App.get_monitors().map(monitor => {
            Bar(monitor)
            OSD(monitor)
            DashboardWindow(monitor)
        });
    },
})