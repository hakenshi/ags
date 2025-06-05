import { Gdk } from 'astal/gtk3'
import PopupWindow from '../../components/PopupWindow'
import { settingsVisible } from './helper'

export default function SettingsWindow(monitor: Gdk.Monitor) {
    return (
        <PopupWindow
            variable={settingsVisible}
            gdkmonitor={monitor}
            className={"SettingsWindow"}
            child={
                <box className={"SettingsContent"} vertical spacing={16}>
                    <button label={""} />
                </box>
            }
        />
    )
}
