import { bind } from "astal";
import Hyprland from "gi://AstalHyprland";
import type { WorkspacesProps } from "../types";
import { getWorkspaceDisplay } from "../utils/helpers";

export default function Workspaces(props: WorkspacesProps = {}) {
    const hypr = Hyprland.get_default();
    const { maxWorkspaces = 10, showEmpty = true } = props;

    return <box className="Workspaces">
        {bind(hypr, "workspaces").as(wss => wss
            .filter(ws => !(ws.id >= -99 && ws.id <= -2)) // filter out special workspaces
            .filter(ws => showEmpty || ws.clients.length > 0) // filter empty if needed
            .sort((a, b) => a.id - b.id)
            .slice(0, maxWorkspaces)
            .map(ws => (
                <button
                    className={bind(hypr, "focusedWorkspace").as(fw =>
                        ws === fw ? "focused" : "")}
                    onClicked={() => ws.focus()}
                    label={getWorkspaceDisplay(ws)}
                />
            ))
        )}
    </box>;
}
