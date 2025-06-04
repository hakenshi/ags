import AstalNetwork01 from 'gi://AstalNetwork'
import PopupWindow from '../../components/PopupWindow'
import { bind } from 'astal'
import { wifiVisible } from './helpers'
import { Gdk, Gtk } from 'astal/gtk3'

export default function WifiMenu(monitor: Gdk.Monitor) {

  const network = AstalNetwork01.get_default()
  const wifi = bind(network, "wifi")

  return (
    <PopupWindow
      variable={wifiVisible}
      namespace={"wifi-menu"}
      gdkmonitor={monitor}
      className={"WifiWindow"}
      child={
        <box>
          <box spacing={8} children={[
            <label label={"Networks"} hexpand halign={Gtk.Align.START} />,
            <button>
              xd
            </button>
          ]} />
        </box>
      }
    />

  )
}
