import { Variable } from "astal";
import type { TimeProps } from "../types";
import { formatTime } from "../utils/helpers";
import { DEFAULT_TIME_FORMAT } from "../../config/constants";

export default function Time(props: TimeProps = {}) {
    const { format = DEFAULT_TIME_FORMAT, updateInterval = 1000 } = props;

    const time = Variable<string>("").poll(updateInterval, () => formatTime(format));

    const date = Variable("").poll(24 * 60 * 60 * 1000, () => formatTime("%d/%m/%Y"));

    return (
        <box
            className={"DateTimeBox"}
            vertical>
            <label
                className="Time"
                onDestroy={() => time.drop()}
                label={time()}
            />
            <label
                className="Date"
                label={date()}
                onDestroy={() => date.drop()}
            />
        </box>
    )
}
