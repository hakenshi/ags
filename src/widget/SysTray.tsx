import { bind } from "astal";
import Tray from "gi://AstalTray";
import type { SysTrayProps } from "../types";

export default function SysTray(props: SysTrayProps = {}) {
  const { spacing = 5 } = props;
  const tray = Tray.get_default();

  const getItemClass = (item: any) => {
    const iconName = item.iconName?.toLowerCase() || "";
    const id = item.id?.toLowerCase() || "";
        
    if (iconName.includes("spotify") || id.includes("spotify")) return "spotify-icon";
    if (iconName.includes("discord") || id.includes("discord")) return "discord-icon";
    if (iconName.includes("steam") || id.includes("steam")) return "steam-icon";
    if (iconName.includes("network") || iconName.includes("wifi") || id.includes("network")) return "network-icon";
    
    return "systray-item";
  };

  return (
    <box className="SysTray" spacing={spacing}>
      {bind(tray, "items").as((items) =>
        items.map((item, index) => (
          <menubutton
            key={index}
            className={getItemClass(item)}
            tooltipMarkup={bind(item, "tooltipMarkup")}
            usePopover={false}
            actionGroup={bind(item, "actionGroup").as((ag) => ag ? ["dbusmenu", ag] : undefined)}
            menuModel={bind(item, "menuModel")}
          >
            <icon gicon={bind(item, "gicon")} />
          </menubutton>
        ))
      )}
    </box>
  );
}
