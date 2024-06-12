import styled from 'styled-components';

export const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPageButton = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  border: none;
  background-color: ${({ theme }) => {
      return theme.colors.interactiveAccent
    }};
  color: white;
  cursor: pointer;
  border-radius: 4px;
  &:disabled {
    background-color: ${({ theme }) => {
      return theme.colors.raven.raven20
    }};
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => {
      return theme.colors.interactiveAccent
    }};
  }
`;

export const StyledPageNumber = styled.span`
  margin: 0 5px;
  padding: 10px 15px;
  background-color: ${({ theme }) => {
      return theme.colors.raven.raven10
    }};
  color: ${({ theme }) => {
      return theme.colors.black
    }};;
  border-radius: 4px;
`;
