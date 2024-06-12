import React from 'react';
import { redirect } from 'react-router-dom';
import { StyledHeaderWrapper } from "./Header.styled";

export const Header: React.FC = () => {

    const handleLogoClick = () => {
        redirect('/');
    };

    return (
        <StyledHeaderWrapper>
            Logo
        </StyledHeaderWrapper>
    );
};
