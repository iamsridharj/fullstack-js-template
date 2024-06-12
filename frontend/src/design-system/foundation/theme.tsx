import { colors } from "src/design-system/foundation/colors/colors";
import { Colors } from "src/design-system/foundation/colors/colors.types";

export interface Theme {
    colors: Colors
}

export const theme: Theme = {
    colors: colors
};