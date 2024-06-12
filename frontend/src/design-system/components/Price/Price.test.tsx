import React from 'react';
import { render } from 'src/utils/testHelpers';
import { Price } from './Price';

describe('Price Unit Tests', () => {
    it('renders with USD currency symbol', () => {
        const { getByText } = render(<Price currency="USD" amount={100} />);
        expect(getByText('$100.00')).toBeInTheDocument();
    });

    it('renders with EUR currency symbol', () => {
        const { getByText } = render(<Price currency="EUR" amount={100} />);
        expect(getByText('€100.00')).toBeInTheDocument();
    });

    it('renders with GBP currency symbol', () => {
        const { getByText } = render(<Price currency="GBP" amount={100} />);
        expect(getByText('£100.00')).toBeInTheDocument();
    });

    it('renders without a currency symbol for unknown currency', () => {
        const { getByText } = render(<Price currency="JPY" amount={100} />);
        expect(getByText('100.00')).toBeInTheDocument();
    });

    it('renders with correct amount formatting', () => {
        const { getByText } = render(<Price currency="USD" amount={100.5} />);
        expect(getByText('$100.50')).toBeInTheDocument();
    });

    it('renders with correct amount formatting for zero', () => {
        const { getByText } = render(<Price currency="USD" amount={0} />);
        expect(getByText('$0.00')).toBeInTheDocument();
    });

    it('renders with correct amount formatting for negative value', () => {
        const { getByText } = render(<Price currency="USD" amount={-100} />);
        expect(getByText('$-100.00')).toBeInTheDocument();
    });
});
