import { bind } from "astal";
import Hyprland from "gi://AstalHyprland?version=0.1";
import type { TaskbarProps } from "../../types";
import { getClientIcon, shouldShowClient } from "../../utils/helpers";

export default function Taskbar(props: TaskbarProps = {}) {
  const hypr = Hyprland.get_default();
  const { maxItems = 10, showTooltips = true } = props;

  return (
    <box className={"Taskbar"} spacing={4}>
      {bind(hypr, "clients").as((clients: Hyprland.Client[]) =>
        clients
          .filter(shouldShowClient)
          .slice(0, maxItems)
          .map((client) => (
            <button
              className={bind(hypr, "focusedClient").as(focused => 
                client === focused ? "focused" : ""
              )}
              tooltipText={showTooltips ? bind(client, "title").as(String) : undefined}
              onClick={() => {
                if (typeof client.focus === "function") {
                  client.focus();
                } else if (typeof hypr.message_async === "function") {
                  hypr.message_async(
                    `Dispatch focuswindow addres:${client.address}`
                  );
                } else {
                  print(
                    "Couldn't focus on the window. Focus method not found."
                  );
                }
              }}
              child={<icon icon={getClientIcon(client)} iconSize={22} />}
            />
          ))
      )}
    </box>
  );
}
