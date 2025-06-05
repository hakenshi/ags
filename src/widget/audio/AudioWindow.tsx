import { bind, Variable } from 'astal'
import { Astal, App, Gdk } from 'astal/gtk3'
import AudioPopover from './AudioPopover'
import VolumeControl from './VolumeControl'
import { visible } from './state'
import PopupWindow from '../../components/PopupWindow'

export default function AudioWindow() {

    return (
        <PopupWindow
            anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.RIGHT}
            exclusivity={Astal.Exclusivity.IGNORE}
            keymode={Astal.Keymode.ON_DEMAND}
            marginBottom={80}
            marginRight={180}
            application={App}
            visible={bind(visible)}
            onButtonPressEvent={(self, event) => {
                visible.set(false);
            }}
            onKeyPressEvent={(self, event) => {
                if (event.get_keyval()[1] === Gdk.KEY_Escape) {
                    visible.set(false);
                }
            }}
            className={"AudioPopover"}
            child={<AudioPopover />}
        />
    )
}
