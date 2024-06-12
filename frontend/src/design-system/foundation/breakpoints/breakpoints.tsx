import { css } from "styled-components";
import { ScreenType } from "./breakpoints.types";

export const breakpoints = {
    breakpointTablet: '767px',
    breakpointMobile: '959px',
    breakpointDesktop: '960px',
};

const above = (screenType: ScreenType): string => `min-width: ${breakpoints[screenType]}`;

const generateAboveMediaQueries = (screenType: ScreenType) => (...args: Parameters<typeof css>) => css`
    @media all and (${above(screenType)}) {
        ${css(...args)}
    }
`;

const forMobile = generateAboveMediaQueries('breakpointMobile');
const forTablet = generateAboveMediaQueries('breakpointTablet');
const forDesktop = generateAboveMediaQueries('breakpointDesktop');

export {
    forMobile,
    forTablet,
    forDesktop
};