import React from 'react';
import { getCurrencySymbol } from './getCurrencySymbol';

interface CurrencyDisplayProps {
    currency: string;
    amount: number;
}

export const Price: React.FC<CurrencyDisplayProps> = ({ currency, amount }) => {
    const symbol = getCurrencySymbol(currency);
    return (
        <span>
            {symbol} {amount.toFixed(2)}
        </span>
    );
};
