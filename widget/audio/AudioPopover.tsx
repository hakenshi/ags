import { bind } from "astal";
import { Astal, Gdk } from "astal/gtk3";
import AstalWp from "gi://AstalWp?version=0.1";
import { volumePopOverVisible } from "./VolumeControl";

export default function AudioPopover() {

    const speaker = AstalWp.get_default()?.audio.defaultSpeaker!

    return (
        <window
            anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.RIGHT}
            exclusivity={Astal.Exclusivity.IGNORE}
            keymode={Astal.Keymode.ON_DEMAND}
            marginBottom={80}
            marginRight={40}
            visible={bind(volumePopOverVisible)}
            onButtonPressEvent={(self, event) => {
                const [, _x, _y] = event.get_coords()
                const { x, y, width, height } = self
                    .get_child()!
                    .get_allocation()

                const xOut = _x < x || _x > x + width
                const yOut = _y < y || _y > y + height

                // clicked outside
                if (xOut || yOut) {
                    console.log("clicked outside")
                    self.visible = false
                }
            }}
            onKeyPressEvent={(self, event) => {
                if (event.get_keyval()[1] === Gdk.KEY_Escape) {
                    self.visible = false
                }
            }}
            className={"AudioPopover"}
        >
            <box
                onButtonPressEvent={() => true}
                className="AudioSliderBox">
                <icon icon={bind(speaker, "volumeIcon")} />
                <slider
                    hexpand
                    onDragged={({ value }) => speaker.volume = value}
                    value={bind(speaker, "volume")}
                    className={"AudioSlider"}
                />
                <label>{speaker.volume}</label>
            </box>
        </window>
    )
}
