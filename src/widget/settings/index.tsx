import { Gdk } from "astal/gtk3";
import VolumeControl from "../audio/VolumeControl";
import BatteryLevel from "../BatteryLevel";
import Wifi from "../wifi/Wifi";
import { settingsVisible } from "./helper";

export default function SettingsToggler() {
    return (
        <eventbox onButtonPressEvent={() => settingsVisible.set(!settingsVisible.get())}
            child={<box spacing={8}>
                <Wifi />
                <VolumeControl />
                <BatteryLevel />
            </box>} />
    )
}
