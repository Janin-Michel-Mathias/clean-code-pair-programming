const getMoney = ({prices, quantities, reduction, country}) => {
    let total = manageReduction(prices, quantities, reduction);
    let currency = '€';

    ({total, currency} = manageCountry(total, country, currency));

    return `${total} ${currency}`;
}

const calculateTotal = (prices, quantities) =>
    prices.reduce((total, price, index) => total + price * quantities[index], 0);

const manageReduction = (prices, quantites, reduction) => {
    if(reduction === 'HALF') {
        return total / 2;
    }
    if(reduction === 'TENTH') {
        return total * 0.9;
    }
    return total;
}

const manageCountry = (total, country, currency) => {
    if(country === 'UK') {
        total *= 2;
        currency = '£';
    }
    if(country === 'US') {
        total *= 3;
        currency = '$';
    }
    return {total, currency};
}

module.exports = getMoney;