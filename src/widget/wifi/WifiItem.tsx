import Network from "gi://AstalNetwork";
import { getSignalIcon, handleConnection } from "./helpers";

export default function WifiItem({ accessPoint }: { accessPoint: Network.AccessPoint }) {
    return (
        <button
            className="WifiItem"
            onClick={() => handleConnection(accessPoint)}
        >
            <box spacing={8}>
                <icon icon={getSignalIcon(accessPoint.strength)} />
                <label label={accessPoint.ssid || "Hidden Network"} hexpand/>
                <label label={`${accessPoint.strength}%`} />
            </box>
        </button>
    )
}
