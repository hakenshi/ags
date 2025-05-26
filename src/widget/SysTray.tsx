import { bind } from "astal";
import Tray from "gi://AstalTray";
import type { SysTrayProps } from "../../types";

export default function SysTray(props: SysTrayProps = {}) {
  const { spacing = 5 } = props;
  const tray = Tray.get_default();

  const getItemClass = (iconName: string) => {
    const name = iconName.toLowerCase();
    if (name.includes("spotify")) return "spotify-icon";
    if (name.includes("discord")) return "discord-icon";
    if (name.includes("steam")) return "steam-icon";
    return "";
  };

  return (
    <box className="SysTray" spacing={spacing}>
      {bind(tray, "items").as((items) =>
        items.map((item) => (
          <menubutton
            className={getItemClass(bind(item, "iconName").get() || "")}
            tooltipMarkup={bind(item, "tooltipMarkup")}
            usePopover={false}
            actionGroup={bind(item, "actionGroup").as((ag) => ["dbusmenu", ag])}
            menuModel={bind(item, "menuModel")}
            child={<icon gicon={bind(item, "gicon")} />}
          />
        ))
      )}
    </box>
  );
}
