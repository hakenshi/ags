import { bind } from "astal";
import { Gtk } from "astal/gtk3";
import AstalWp from "gi://AstalWp?version=0.1";
import { visible } from "./state";

export default function AudioPopover() {

    const speaker = AstalWp.get_default()?.audio.defaultSpeaker!

    return (
        <revealer
            revealChild={bind(visible)}
            transitionType={Gtk.RevealerTransitionType.SLIDE_UP}
            child={
                <box
                    vertical
                    className="AudioSliderBox"
                >
                    <icon icon={bind(speaker, "volumeIcon")} />
                    <slider
                        vexpand
                        vertical
                        inverted
                        onDragged={({ value }) => speaker.volume = value}
                        value={bind(speaker, "volume")}
                        className={"AudioSlider"}
                        heightRequest={100}
                    />
                    <label
                        label={bind(speaker, "volume").as(vol => `${Math.round(vol * 100)}%`)}
                    />
                </box>
            }
        />
    )
}
