const getMoney = ({prices, quantities, reduction, country}) => {
    let total = manageReduction(prices, quantities, reduction);
    let currency = '€';

    ({total, currency} = manageCountry(total, country, currency));

    return `${total} ${currency}`;
}

const calculateTotal = (prices, quantities) =>
    prices.reduce((total, price, index) => total + price * quantities[index], 0);

const manageReduction = (prices, quantities, reduction) => {
    if(reduction === 'HALF_FIRST') {
        prices = prices.map((price, index) => {
            if(index <= Math.ceil(prices.length/2) -1) return price/2;
            return price;
        })
    }
    if(reduction === 'HALF_LAST') {
        prices = prices.map((price, index) => {
            if(index < Math.floor(prices.length/2)) return price/2;
            return price;
        })
    }
    if(reduction === 'HALF') {
        prices = prices.map(price => price/2);
    }
    if(reduction === 'TENTH') {
        prices = prices.map(price => price * 0.9);
    }
    return calculateTotal(prices, quantities);
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