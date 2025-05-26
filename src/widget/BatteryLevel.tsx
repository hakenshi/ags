import { bind } from "astal";
import Battery from "gi://AstalBattery";
import type { BatteryProps } from "../../types";
import { formatPercentage } from "../../utils/helpers";

export default function BatteryLevel(props: BatteryProps = {}) {
    const { showPercentage = true, lowBatteryThreshold = 0.15 } = props;
    const bat = Battery.get_default();

    const getBatteryClass = (percentage: number) => {
        if (percentage < 0.05) return "critical";
        if (percentage < lowBatteryThreshold) return "low";
        return "";
    };

    return <box 
        className={bind(bat, "percentage").as(p => `Battery ${getBatteryClass(p)}`)}
        visible={bind(bat, "isPresent")}
    >
        <icon icon={bind(bat, "batteryIconName")} />
        {showPercentage && (
            <label label={bind(bat, "percentage").as(p =>
                formatPercentage(p, 0)
            )} />
        )}
    </box>;
}
