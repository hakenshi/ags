import { bind } from "astal";
import Network from "gi://AstalNetwork";
import type { WidgetProps } from "../types";

export default function Wifi(props: WidgetProps = {}) {
    const network = Network.get_default();
    const wifi = bind(network, "wifi");

    const getWifiClass = (wifi: any) => {
        if (!wifi) return "disconnected";
        if (wifi.state === "connecting") return "connecting";
        if (wifi.state === "connected") return "connected";
        return "disconnected";
    };

    return (
        <box visible={wifi.as(Boolean)}>
            {wifi.as(wifi =>
                wifi
                    ? [
                        <button
                            className={`Wifi ${getWifiClass(wifi)}`}
                            tooltipText={bind(wifi, "ssid").as(ssid => 
                                ssid ? `Connected to: ${ssid}` : "WiFi Available"
                            )}
                        >
                            <icon icon={bind(wifi, "iconName")} />
                        </button>
                    ]
                    : []
            )}
        </box>
    );
}
