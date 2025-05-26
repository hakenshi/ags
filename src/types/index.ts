import { Gdk, Gtk } from "astal/gtk3";
import AstalWp from "gi://AstalWp";
import AstalHyprland from "gi://AstalHyprland";

// Base widget properties
export interface WidgetProps {
    className?: string;
    visible?: boolean;
    tooltip?: string;
}

// Audio related types
export interface AudioProps extends WidgetProps {
    speaker: AstalWp.Endpoint;
}

export interface VolumeControlProps extends WidgetProps {
    showPopover?: boolean;
    monitor: Gdk.Monitor
}

// Workspace related types
export interface WorkspaceProps extends WidgetProps {
    id: number;
    focused: boolean;
    workspace: AstalHyprland.Workspace;
}

export interface WorkspacesProps extends WidgetProps {
    maxWorkspaces?: number;
    showEmpty?: boolean;
}

// Taskbar related types
export interface TaskbarProps extends WidgetProps {
    maxItems?: number;
    showTooltips?: boolean;
}

export interface ClientProps extends WidgetProps {
    client: AstalHyprland.Client;
    focused?: boolean;
}

// Battery related types
export interface BatteryProps extends WidgetProps {
    showPercentage?: boolean;
    lowBatteryThreshold?: number;
}

// Time related types
export interface TimeProps extends WidgetProps {
    format?: string;
    updateInterval?: number;
}

// Media related types
export interface MediaProps extends WidgetProps {
    showCover?: boolean;
    maxLength?: number;
}

// System tray related types
export interface SysTrayProps extends WidgetProps {
    spacing?: number;
}

// App launcher related types
export interface AppLauncherProps extends WidgetProps {
    command?: string;
    icon?: string;
}

// Bar related types
export interface BarProps {
    monitor: any; // Gdk.Monitor type
    position?: "top" | "bottom";
    spacing?: number;
}

// Common alignment types
export type Alignment = Gtk.Align.START | Gtk.Align.CENTER | Gtk.Align.END | Gtk.Align.FILL;

// Animation types
export interface AnimationProps {
    duration?: number;
    easing?: string;
}
