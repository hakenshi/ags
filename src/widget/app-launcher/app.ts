import { App } from "astal/gtk3";
import styles from "./styles.scss";
import Applauncher from "./AppLauncher";

App.start({
  instanceName: "launcher",
  css: styles,
  main: Applauncher,
});
