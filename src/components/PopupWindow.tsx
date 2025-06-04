import { bind, Variable } from "astal";
import { App, Widget } from "astal/gtk3";
import { Astal } from "astal/gtk3";

interface PopupWindowProps extends Widget.WindowProps {
    variable: Variable<boolean>
}

export default function PopupWindow({
    gdkmonitor,
    namespace,
    application = App,
    keymode = Astal.Keymode.ON_DEMAND,
    anchor = Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.RIGHT,
    child,
    variable,
    ...props
}: PopupWindowProps) {

    return (
        <window
            gdkmonitor={gdkmonitor}
            namespace={namespace}
            application={application}
            visible={bind(variable)}
            keymode={keymode}
            anchor={anchor}
            {...props}
        >
            <eventbox onClick={() => variable.set(false)}>
                {child}
            </eventbox>

        </window>
    )
}