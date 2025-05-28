import Network from "gi://AstalNetwork";
import { Variable } from "astal";

export const wifiVisible = Variable(false);

export function getSignalIcon(strength: number) {
  if (strength >= 80) return "network-wireless-excellent-symbolic";
  if (strength >= 60) return "network-wireless-good-symbolic";
  if (strength >= 40) return "network-wireless-signal-ok-symbolic";
  if (strength >= 20) return "network-wireless-signal-weak-symbolic";
  return "network-wireless-signal-none-symbolic";
}

export async function handleConnection(accessPoint: Network.AccessPoint) {
  try {
    // await accessPoint.connect()
    wifiVisible.set(false);
  } catch (error) {
    printerr(error);
  }
}
