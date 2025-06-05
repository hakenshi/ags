import { Astal, Gdk, Gtk } from "astal/gtk3";
import { SPACING } from "../config/constants";
import VolumeControl from "./widget/audio/VolumeControl";
import BatteryLevel from "./widget/BatteryLevel";
import SysTray from "./widget/SysTray";
import Time from "./widget/Time";
import Taskbar from "./widget/wlr/Taskbar";
import Workspaces from "./widget/Workspaces";
import Wifi from "./widget/wifi/Wifi";
import SettingsToggler from "./widget/dashboard";
import DashboardToggler from "./widget/dashboard";

export default function Bar(monitor: Gdk.Monitor) {
  const { BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor;

  const start = (
    <box className={"modules-left"} hexpand halign={Gtk.Align.START}>
      {[<Taskbar />]}
    </box>
  );

  const center = (
    <box className={"modules-center"}>
      {[<Workspaces />]}
    </box>
  );

  const end = (
    <box className={"modules-right"} hexpand halign={Gtk.Align.END}>
      {/* <SysTray /> */}
      <DashboardToggler />
      <Time />
    </box>
  );

  return (
    <window
      className="Bar"
      gdkmonitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={BOTTOM | LEFT | RIGHT}
      child={<centerbox>{[start, center, end]}</centerbox>}
    />
  );
}
