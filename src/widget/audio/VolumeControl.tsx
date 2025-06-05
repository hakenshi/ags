import { bind, Variable } from "astal";
import Wp from "gi://AstalWp";
import { visible } from "./state";

export default function VolumeControl() {
    const speaker = Wp.get_default()?.audio.defaultSpeaker!

    if (speaker) {
        return (
            <icon icon={bind(speaker, "volumeIcon")} />
        )
    }

    return <icon icon="audio-volume-muted-symbolic" className="Volume disabled" />

}
