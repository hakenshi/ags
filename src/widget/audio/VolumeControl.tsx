import { bind, Variable } from "astal";
import Wp from "gi://AstalWp";
import { visible } from "./state";

export default function VolumeControl() {
    const speaker = Wp.get_default()?.audio.defaultSpeaker!

    return (
        <button onClick={() => visible.set(!visible.get())}>
            <icon icon={bind(speaker, "volumeIcon")} />
        </button>
    )
}
