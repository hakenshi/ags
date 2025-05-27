import { GObject, Variable } from "astal";
import { astalify, Gtk, Widget } from "astal/gtk3";

interface PopupWindowProps extends Widget.WindowProps {
    variable: Variable<boolean>
    children?: JSX.Element
}

class PopupWindow extends astalify(Gtk.Window) {
    static { GObject.registerClass(this) }

    constructor(props: PopupWindowProps) {
        super(props as any)
        
        this.set_visible(props.variable.get())

        props.variable.subscribe(visible => {
            this.set_visible(visible)
        })
        // this.child = (
        //     <eventbox
        //         onButtonPressEvent={() => props.variable.set(false)}
        //     >
        //         {props.children}
        //     </eventbox>
        // )
    }
}

export default PopupWindow