import { bind, Binding, Variable } from "astal"
import { Astal, Gtk } from "astal/gtk3"
import { WindowProps } from "astal/gtk3/widget"

interface PopupWindowProps extends WindowProps {
    variable: Variable<boolean>
    children?: JSX.Element[] | Binding<JSX.Element[]>
}

export default function PopupWindow({ children, variable, ...rest }: PopupWindowProps) {
    return (
        <window
            {...rest}
        >
            <eventbox onClick={() => variable.set(false)}>
                <revealer
                    revealChild={bind(variable)}
                    transitionType={Gtk.RevealerTransitionType.SLIDE_UP}
                >
                    {children}
                </revealer>
            </eventbox>
        </window>
    )
}
