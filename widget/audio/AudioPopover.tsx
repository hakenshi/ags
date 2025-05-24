import { bind } from "astal";
import AstalWp01 from "gi://AstalWp";
import type { AudioProps } from "../../types";

export default function AudioPopover({speaker}: {speaker: AstalWp01.Endpoint}) {
    return (
        <box className="AudioSlider">
            <slider
                hexpand
                onDragged={({ value }) => speaker.volume = value}
                value={bind(speaker, "volume")}
            />
        </box>
    )
}
