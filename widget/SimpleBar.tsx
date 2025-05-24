import { Astal, Gdk, Gtk } from "astal/gtk3";
import { SPACING } from "../config/constants";

export default function SimpleBar(monitor: Gdk.Monitor) {
  const { BOTTOM, LEFT, RIGHT } = Astal.WindowAnchor;

  return (
    <window
      className="Bar"
      gdkmonitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={BOTTOM | LEFT | RIGHT}
      child={
        <centerbox spacing={SPACING}>
          <box className="modules-left" hexpand halign={Gtk.Align.START}>
            <label label="Left" />
          </box>
          <box className="modules-center">
            <label label="Center" />
          </box>
          <box className="modules-right" hexpand halign={Gtk.Align.END}>
            <label label="Right" />
          </box>
        </centerbox>
      }
    />
  );
}
