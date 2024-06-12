import { forDesktop } from '@design-system/breakpoints'
import styled from 'styled-components'

export const StyledTextInput = styled.input<{
  $transparentBorder: boolean
}>`
  font-size: 18px;
  margin: 0 8px;
  width: 100%;
  border-radius: 4px;
  padding: 7px 18px;
  border: 1px solid ${({ theme, $transparentBorder }) => {
    return $transparentBorder ? "transparent" : theme.colors.raven.raven60;
  }};
  border-color: ${({ theme, $transparentBorder }) => {
      return $transparentBorder ? "transparent" : theme.colors.raven.raven60;
    }};
  outline: none;

  &:focus {
    border: 1px solid ${({ $transparentBorder }) => {
      return $transparentBorder ? "transparent" : "solid";
    }};
    border-color: ${({ theme, $transparentBorder }) => {
      
      return $transparentBorder ? "transparent" : theme.colors.raven.raven60;
    }};
    outline: none;
  }

  ${
    forDesktop`
      width: 95%;
    `
  }
`
