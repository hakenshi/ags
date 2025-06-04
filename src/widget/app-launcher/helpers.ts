import { App } from "astal/gtk3";

export const MAX_ITEMS = 8;

export function hide() {
  App.get_window("launcher")?.hide();
}


