import { bind, timeout, Variable } from "astal";
import { App, Astal, Gdk, Gtk } from "astal/gtk3";
import AstalWp from "gi://AstalWp?version=0.1";
import { visible } from "./state";
import { Revealer } from "astal/gtk3/widget";

export default function AudioPopover() {

    const speaker = AstalWp.get_default()?.audio.defaultSpeaker!
    const volumeValue = Variable(0)
    let timeoutId: ReturnType<typeof timeout> | null = null
    const setupAudioPopover = (v: number) => {
        visible.set(true)
        volumeValue.set(v)

        if (timeoutId) {
            timeoutId.cancel()
        }

        timeoutId = timeout(2000, () => {
            visible.set(false)
            timeoutId = null
        })
    }

    return (

        <revealer
            setup={self => {
                let volumeHookId: number | null = null
                if (speaker) {
                    volumeHookId = speaker.connect("notify::volume", () => {
                        setupAudioPopover(speaker.volume)
                    })
                }

                self.connect('destroy', () => {
                    if (timeoutId) {
                        timeoutId.cancel()
                        timeoutId = null
                    }

                    if (volumeHookId && speaker) {
                        speaker.disconnect(volumeHookId)
                        volumeHookId = null
                    }
                })
            }}
            revealChild={bind(visible)}
            transitionType={Gtk.RevealerTransitionType.SLIDE_UP}
        >
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
                    value={bind(volumeValue)}
                    className={"AudioSlider"}
                    heightRequest={100}
                />
                <label
                    label={bind(speaker, "volume").as(vol => `${Math.round(vol * 100)}%`)}
                />
            </box>
        </revealer>
    )
}
