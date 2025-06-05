import { Gdk } from "astal/gtk3";
import VolumeControl from "../audio/VolumeControl";
import BatteryLevel from "../BatteryLevel";
import Wifi from "../wifi/Wifi";
import { dashboardVisible } from "./helper";

export default function DashboardToggler() {
    return (
        <eventbox onButtonPressEvent={() => dashboardVisible.set(!dashboardVisible.get())}
            child={<box spacing={8}>
                <Wifi />
                <VolumeControl />
                <BatteryLevel />
            </box>} />
    )
}
