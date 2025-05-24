import { bind, Variable } from "astal";
import Wp from "gi://AstalWp";
import AudioPopover from "./AudioPopover";
import { Gtk } from "astal/gtk3";
import type { VolumeControlProps } from "../../types";

export default function VolumeControl(props: VolumeControlProps = {}) {
    const speaker = Wp.get_default()?.audio.defaultSpeaker!
    const visible = Variable(false)

    return (
        <overlay className="VolumeControl">
            <button 
                className="VolumeButton"
                onClick={() => visible.set(!visible.get())}
                tooltipText={bind(speaker, "description").as(String)}
            >
                <icon icon={bind(speaker, "volumeIcon")} />
            </button>
            <box
                className="AudioPopoverOverlay"
                visible={bind(visible)}
                valign={Gtk.Align.START}
                halign={Gtk.Align.END}
            >
                <AudioPopover speaker={speaker} />
            </box>
        </overlay>
    )
}
