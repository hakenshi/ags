import { bind } from "astal";
import Battery from "gi://AstalBattery";
import type { BatteryProps } from "../types";
import { formatPercentage } from "../utils/helpers";

export default function BatteryLevel(props: BatteryProps = {}) {
    const bat = Battery.get_default();

    const getBatteryClass = (percentage: number) => {
        if (percentage < 0.05) return "critical";
        if (percentage < 0.15) return "low";
        return "";
    };

    return <box
        className={bind(bat, "percentage").as(p => `Battery ${getBatteryClass(p)}`)}
        visible={bind(bat, "isPresent")}
    >
        <icon icon={bind(bat, "batteryIconName")} />
        <label label={bind(bat, "percentage").as(p =>
            formatPercentage(p, 0)
        )} />
    </box>;
}
