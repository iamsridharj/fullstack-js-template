import React from 'react';
import { BodyTextSmall } from "@design-system/typography";
import { StyledPageButton, StyledPageNumber, StyledPaginationWrapper } from "./Pagination.styled";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 0) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <StyledPaginationWrapper>
            <StyledPageButton
                onClick={handlePrevious}
                disabled={currentPage === 0}
                aria-label="Previous Page"
            >
                Previous
            </StyledPageButton>
            <StyledPageNumber>
                {currentPage + 1} / {totalPages}
            </StyledPageNumber>
            <StyledPageButton
                onClick={handleNext}
                disabled={currentPage === (totalPages - 1)}
                aria-label="Next Page"
            >
                <BodyTextSmall>Next</BodyTextSmall>
            </StyledPageButton>
        </StyledPaginationWrapper>
    );
};
