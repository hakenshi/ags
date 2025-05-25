import { App } from "astal/gtk3"
import style from "./style.scss"
import Bar from "./widget/Bar"
import AudioPopover from "./widget/audio/AudioPopover"

App.start({
    main() {
        App.set_gtk_theme("win32")
        App.apply_css(style);
        // App.reset_css()
        App.get_monitors().map(Bar);
        AudioPopover()
    },
})
