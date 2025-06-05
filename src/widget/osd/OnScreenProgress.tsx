import { bind, timeout, Variable } from 'astal'
import { Gtk } from 'astal/gtk3'
import AstalWp01 from 'gi://AstalWp'

export default function OnScreenProgress({ visible }: { visible: Variable<boolean> }) {

    const speaker = AstalWp01.get_default()?.audio.defaultSpeaker!
    const iconName = Variable("")
    const volumeValue = Variable(0)
    const initialized = Variable(false)


    let count = 0

    const show = (v: number, icon: string) => {
        volumeValue.set(v)
        iconName.set(icon)
        visible.set(true)

        count++

        timeout(2000, () => {
            count--
            if (count === 0) {
                visible.set(false)
            }
        })

    }

    return (
        <revealer
            setup={self => {
                if (speaker) {
                    self.hook(speaker, 'notify::volume', () => {
                        if (!initialized.get()) {
                            initialized.set(true)
                            return
                        }
                        show(speaker.volume, speaker.volumeIcon)

                    })
                }
            }}
            revealChild={bind(visible)}
            transitionType={Gtk.RevealerTransitionType.SLIDE_UP}
        >
            <box
                orientation={Gtk.Orientation.HORIZONTAL}
                className="OsdLevelBox"
                valign={Gtk.Align.CENTER}
                spacing={10}
            >
                <icon icon={bind(speaker, "volumeIcon")} valign={Gtk.Align.CENTER} />

                <levelbar
                    valign={Gtk.Align.CENTER}
                    value={bind(volumeValue)}
                    className={"OsdLevelBar"}
                />

                <label
                    label={volumeValue(vol => `${Math.round(vol * 100)}%`)}
                    valign={Gtk.Align.CENTER}
                />
            </box>
        </revealer>
    )
}