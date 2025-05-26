import { GLib } from "astal";
import { Gtk } from "astal/gtk3";
import type { AppLauncherProps } from "../types";
import { spawnAsync } from "../utils/helpers";

export default function AppLauncher(props: AppLauncherProps = {}) {
    const { command = "rofi -show drun", icon } = props;

    const openAppLauncher = () => {
        spawnAsync(command);
    }

    const logoName = icon || GLib.get_os_info('LOGO');

    return (
        <button
            className="AppLauncher"
            tooltipText={"Open app launcher"}
            onClick={openAppLauncher}
            child={<icon icon={logoName as string} />}
        />
    )
}
