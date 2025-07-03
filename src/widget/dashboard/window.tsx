import { Gdk } from 'astal/gtk3'
import PopupWindow from '../../components/PopupWindow'
import { dashboardVisible } from './helper'
import Wifi from '../wifi/Wifi'

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
                    <box vertical className={"DashboardButtons"} spacing={16}>
                        <box spacing={16}>
                            <button className={"DashboardButton"}>
                                <box spacing={8}>
                                    <Wifi />
                                    <label label={"Wifi"} />
                                </box>
                            </button>
                            <button className={"DashboardButton"}>
                                <box spacing={8}>
                                    <icon icon={"preferences-desktop-wallpaper-symbolic"} />
                                    <label label={"Wallpaper"} />
                                </box>
                            </button>
                        </box>
                        <box spacing={16}>
                            <button className={"DashboardButton"}>
                                <box spacing={8}>
                                    <Wifi />
                                    <label label={"Wifi"} />
                                </box>
                            </button>
                            <button className={"DashboardButton"}>
                                <box spacing={8}>
                                    <icon icon={"preferences-desktop-wallpaper-symbolic"} />
                                    <label label={"Wallpaper"} />
                                </box>
                            </button>
                        </box>
                    </box>
                    <box className={"DashboardMediaPlayer"}>
                    </box>
                    <box className={"DashboardSliders"}>
                    </box>
                </box>
            }
        />
    )
}
