import { Variable } from "astal";
import { App, Astal, Gdk } from "astal/gtk3";
import OnScreenProgress from "./OnScreenProgress";

export default function OSD(monitor: Gdk.Monitor) {

    const osdVisible = Variable(false)

    return (
        <window
            gdkmonitor={monitor}
            namespace="osd"
            className="OsdWindow"
            application={App}
            keymode={Astal.Keymode.ON_DEMAND}
            anchor={Astal.WindowAnchor.BOTTOM}
        >
            <eventbox onClick={() => osdVisible.set(false)}>
                <OnScreenProgress visible={osdVisible} />
            </eventbox>
        </window>
    )
}
