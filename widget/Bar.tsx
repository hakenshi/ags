import { Astal, Gdk, Gtk } from "astal/gtk3";
import { SPACING } from "../config/constants";
import AppLauncher from "./AppLauncher";
import VolumeControl from "./audio/VolumeControl";
import BatteryLevel from "./BatteryLevel";
import SysTray from "./SysTray";
import Time from "./Time";
import Taskbar from "./wlr/Taskbar";
import Workspaces from "./Workspaces";

export default function Bar(monitor: Gdk.Monitor) {
  const { BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor;

  const start = (
    <box className={"modules-left"} hexpand halign={Gtk.Align.START}>
      {[<AppLauncher />, <Taskbar />]}
    </box>
  );

  const center = (
    <box className={"modules-center"}>
      {[<Workspaces />]}
    </box>
  );

  const end = (
    <box className={"modules-right"} hexpand halign={Gtk.Align.END}>
      <SysTray />
      <VolumeControl />
      <BatteryLevel />
      <Time />
    </box>
  );

  return (
    <window
      className="Bar"
      gdkmonitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={BOTTOM | LEFT | RIGHT}
      child={<centerbox spacing={SPACING}>{[start, center, end]}</centerbox>}
    />
  );
}
