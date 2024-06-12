export const getCurrencySymbol = (currency: string): string => {
    switch (currency) {
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
        case 'GBP':
            return '£';
        case 'JPY':
            return '¥';
        case 'AUD':
            return 'A$';
        case 'ZAR':
            return 'R';
        case 'THB':
            return '฿';
        case 'RUB':
            return '₽';
        case 'BRL':
            return 'R$';
        case 'TRY':
            return '₺';
        case 'CNY':
            return '¥';
        case 'CAD':
            return 'C$';
        case 'SGD':
            return 'S$';
        case 'ARS':
            return '$';
        case 'EGP':
            return 'E£';
        case 'CUP':
            return '₱';
        case 'CZK':
            return 'Kč';
        case 'MYR':
            return 'RM';
        case 'HKD':
            return 'HK$';
        case 'AED':
            return 'د.إ';
        default:
            return '';
    }
};


