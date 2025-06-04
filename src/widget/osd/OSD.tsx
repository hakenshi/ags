import { bind, Variable } from "astal";
import { App, Astal, Gdk } from "astal/gtk3";
import OnScreenProgress from "./OnScreenProgress";
import PopupWindow from "../../components/PopupWindow";

export default function OSD(monitor: Gdk.Monitor) {

    const osdVisible = Variable(false)

    return (
        <PopupWindow
            gdkmonitor={monitor}
            namespace="osd"
            className="OsdWindow"
            application={App}
            keymode={Astal.Keymode.ON_DEMAND}
            anchor={Astal.WindowAnchor.BOTTOM}
            variable={osdVisible}
        >
            <OnScreenProgress visible={osdVisible} />
        </PopupWindow>
    )
}
