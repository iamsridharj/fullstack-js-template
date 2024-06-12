import styled from "styled-components";
import { forDesktop } from "@design-system/breakpoints";

export const HeaderOne = styled.h1`
    font-weight: 600;
    font-size: 22px; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 24px; 
    `}
`;

export const HeaderTwo = styled.h2`
    font-weight: 600;
    font-size: 20px; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 22px; 
    `}
`;

export const HeaderThree = styled.h2`
    font-weight: 600;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 16px; 
    `}
`;

export const HeaderFour = styled.h2`
    font-weight: 600;
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 14px; 
    `}
`;



export const Label = styled.span`
    font-weight: 500;
    font-size: 12px; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 14px; 
    `}
`;

export const BodyTextBig = styled.span`
    font-weight: 400;
    font-size: 14px; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 14px; 
    `}
`;

export const BodyTextSmall = styled.span`
    font-weight: 400;
    font-size: 12px; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 14px; 
    `}
`;

export const BodyTextBold = styled.span`
    font-weight: 600;
    font-size: 12px; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 14px; 
    `}
`;
