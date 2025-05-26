import { volumePopOverVisible } from '../widget/audio/VolumeControl';
import { GLib, timeout } from "astal";
import { CLIENT_ICON_MAP, DEFAULT_TIME_FORMAT } from "../../config/constants";

/**
 * Get appropriate icon for a client based on its class
 */
export function getClientIcon(client: any): string {
    if (!client?.class) return "application-x-executable";

    const clientClass = client.class.toLowerCase();

    // Check for exact matches first
    if (CLIENT_ICON_MAP[clientClass]) {
        return CLIENT_ICON_MAP[clientClass];
    }

    // Check for partial matches
    for (const [key, icon] of Object.entries(CLIENT_ICON_MAP)) {
        if (clientClass.includes(key)) {
            return icon;
        }
    }

    return "application-x-executable";
}

/**
 * Format time with given format string
 */
export function formatTime(format: string = DEFAULT_TIME_FORMAT): string {
    try {
        return GLib.DateTime.new_now_local().format(format) || "";
    } catch (error) {
        console.error("Error formatting time:", error);
        return "";
    }
}

/**
 * Truncate text to specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number = 30): string {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + "...";
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Convert percentage to human readable format
 */
export function formatPercentage(value: number, decimals: number = 0): string {
    return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Check if client should be shown in taskbar
 */
export function shouldShowClient(client: any): boolean {
    if (!client) return false;

    // Filter out special workspaces and invalid clients
    if (client.workspace?.id < 0) return false;
    if (client.class === "") return false;

    return true;
}

/**
 * Get workspace icon or number
 */
export function getWorkspaceDisplay(workspace: any): string {
    const icons: Record<number, string> = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10"
    };

    return icons[workspace.id] || workspace.id.toString();
}

/**
 * Spawn command asynchronously with error handling
 */
export function spawnAsync(command: string | string[]): void {
    try {
        const cmd = Array.isArray(command) ? command : [command];
        GLib.spawn_async(
            null,
            cmd,
            null,
            GLib.SpawnFlags.SEARCH_PATH | GLib.SpawnFlags.DO_NOT_REAP_CHILD,
            null
        );
    } catch (error) {
        const cmdStr = Array.isArray(command) ? command.join(" ") : command;
        console.error(`Failed to spawn command: ${cmdStr}`, error);
    }
}

/**
 * Debounce function calls
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
        if (timeout !== null) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            func(...args);
            timeout = null;
        }, wait);
    };
}

/**
 * Format bytes to human readable format
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return "0 B";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["B", "KB", "MB", "GB", "TB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

/**
 * Check if string is valid URL
 */
export function isValidUrl(string: string): boolean {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

/**
 * Capitalize first letter of string
 */
export function capitalize(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Get contrast color for background
 */
export function getContrastColor(hexColor: string): string {
    // Remove # if present
    const color = hexColor.replace("#", "");

    // Parse RGB values
    const r = parseInt(color.substr(0, 2), 16);
    const g = parseInt(color.substr(2, 2), 16);
    const b = parseInt(color.substr(4, 2), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? "#000000" : "#ffffff";
}