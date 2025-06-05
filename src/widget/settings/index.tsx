import { Gdk } from "astal/gtk3";
import VolumeControl from "../audio/VolumeControl";
import BatteryLevel from "../BatteryLevel";
import Wifi from "../wifi/Wifi";
import { settingsVisible } from "./helper";

export default function SettingsToggler() {
    return (
        <box>
            <Wifi />
            <VolumeControl />
            <BatteryLevel />
        </box>
    )
}
