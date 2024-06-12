import React from 'react';
import { render } from 'src/utils/testHelpers';
import { Card } from './Card';
import { CardTestIds } from './Card.constant';

describe('Card Component', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(<Card>Test Content</Card>);
        expect(getByTestId(CardTestIds.cardWrapper)).toBeInTheDocument();
    });

    it('displays the correct children', () => {
        const childText = 'Test Content';
        const { getByText } = render(<Card>{childText}</Card>);
        expect(getByText(childText)).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Card>Test Content</Card>);
        expect(asFragment()).toMatchSnapshot();
    });
});
