import { Colors } from "src/design-system/foundation/colors/colors.types";

const white = "#FFFFFF";
const black = "#000000";

const raven = {
    raven100: "#1a2b49",
    raven80: "#304c84",
    raven60: "#63687a",
    raven40: "#C3C5D5",
    raven20: "#dcdfe4",
    raven10: "#F0F0F5",
};

const success = {
    success100: '#42A675',
    success50: '#A0D3BA',
    success10: '#ECF6F1',
};

const danger = {
    danger100: '#F24F2B',
    danger50: '#F49C9C',
    danger10: '#FDEBEB',
};

const primary = white;
const secondary = raven.raven80;
const accent = "#ff5533"
const interactiveAccent = "#0071eb"

export const colors: Colors = {
    raven,
    success,
    danger,
    white,
    black,
    primary,
    secondary,
    accent,
    interactiveAccent,
    transparent: 'transparent',
    current: 'currentColor',
};