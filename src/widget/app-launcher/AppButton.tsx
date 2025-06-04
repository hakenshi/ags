import Apps from "gi://AstalApps";
import { hide } from "./helpers";
import { Gtk } from "astal/gtk3";

export default function AppButton({ app }: { app: Apps.Application }) {

    return (
        <button
            onClicked={() => { hide(); app.launch() }}
            className="AppButton"
        >
            <box>
                <icon icon={app.iconName} />
                <box valign={Gtk.Align.CENTER} child={<label
                    label={app.name}
                    truncate
                    xalign={0}
                    className={"name"}
                />} />
            </box>
        </button>
    )
}
