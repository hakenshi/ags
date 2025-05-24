import { Astal, Gdk, Gtk } from "astal/gtk3";

export default function TestBar(monitor: Gdk.Monitor) {
  return (
    <window
      className="Bar"
      gdkmonitor={monitor}
      child={
        <box>
          <label label="AGS Test Bar" />
        </box>
      }
    />
  );
}
