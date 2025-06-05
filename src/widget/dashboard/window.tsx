import { Gdk } from 'astal/gtk3'
import PopupWindow from '../../components/PopupWindow'
import { dashboardVisible } from './helper'

export default function DashboardWindow(monitor: Gdk.Monitor) {
    return (
        <PopupWindow
            variable={dashboardVisible}
            gdkmonitor={monitor}
            className={"DashboardWindow"}
            namespace={"DashboardWindow"}
            marginBottom={10}
            marginRight={10}
            widthRequest={300}
            heightRequest={250}
            child={
                <box className={"DashboardContent"} vertical spacing={16}>
                    <box className={"DashboardButtons"}>
                        <box spacing={16}>
                            <button label={"Wifi"} />
                            <button label={"Wallpaper"} />
                        </box>
                        <box spacing={16}>
                            <button label={"Notifications"} />
                            <button label={"Lockscreen"} />
                        </box>
                    </box>
                    <box className={"MediaPlayer"}>
                    </box>
                    <box className={"DashboardSliders"}>
                    </box>
                </box>
            }
        />
    )
}
