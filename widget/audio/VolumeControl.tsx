import { bind, Variable } from "astal";
import Wp from "gi://AstalWp";
import type { VolumeControlProps } from "../../types";

export const volumePopOverVisible = Variable(false)

export default function VolumeControl(props: VolumeControlProps) {
    const speaker = Wp.get_default()?.audio.defaultSpeaker!

    return (
        <button onClick={() => volumePopOverVisible.set(!volumePopOverVisible.get())}>
            <icon icon={bind(speaker, "volumeIcon")} />
        </button>
    )
}
