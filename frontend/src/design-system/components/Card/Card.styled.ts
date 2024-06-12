import { styled } from "styled-components";

export const StyledCardWrapper = styled.article`
    border-radius: 4px 4px 0 0;
    position: relative;
    height: 100%;
    width: 100%;
    border: 1px solid ${({ theme }) => {
      return theme.colors.raven.raven40
    }};
    background-color: ${({ theme }) => {
      return theme.colors.white
    }};
`