import React from 'react';
import { StyledCardWrapper } from './Card.styled';
import { CardTestIds } from './Card.constant';

interface CardProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return <StyledCardWrapper data-testid={CardTestIds.cardWrapper} >{children}</StyledCardWrapper>;
};
