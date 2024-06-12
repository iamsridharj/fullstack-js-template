import styled from 'styled-components'
import { ButtonProps } from './Button.types'

export const StyledButton = styled.button<{
  $iconPosition: ButtonProps['iconPosition']
}>`
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-style: solid;
  border-width: 2px;
  border-radius: 5rem;
  transition: background-color .2s ease-out;
  flex-direction: ${({ $iconPosition }) =>
    $iconPosition === 'left' ? 'row-reverse' : 'row'};

  color: ${({ theme }) => {
    return theme.colors.white
  }};
  border: 1px solid ${({ theme }) => {
      return theme.colors.interactiveAccent
    }};
  background: ${({ theme }) => {
    return theme.colors.interactiveAccent
  }};

  &:hover {
    background: ${({ theme }) => {
    return theme.colors.secondary
  }};
  border: 1px solid ${({ theme }) => {
    return theme.colors.secondary
  }};
  }
`
