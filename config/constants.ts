// Configuration constants for AGS shell
export const SPACING = 0;
export const ANIMATION_DURATION = 200;

// Client icon mappings
export const CLIENT_ICON_MAP: Record<string, string> = {
    firefox: "firefox",
    brave: "brave-browser",
    code: "visual-studio-code",
    vscode: "visual-studio-code",
    discord: "discord",
    spotify: "com.spotify.Client",
    nautilus: "system-file-manager",
    files: "system-file-manager",
    thunar: "system-file-manager",
    kitty: "kitty",
    zen: "zen-browser",
    steam: "steam",
    telegram: "telegram",
    gimp: "gimp",
    obs: "obs-studio"
};

// Window anchors
export const WINDOW_ANCHORS = {
    TOP: 1,
    BOTTOM: 2,
    LEFT: 4,
    RIGHT: 8
} as const;

// Default time format
export const DEFAULT_TIME_FORMAT = "%H:%M";
export const DEFAULT_DATE_FORMAT = "%A, %d %B";
