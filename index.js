const getMoney = ({prices, quantities, reduction, country}) => {
    const total = prices.reduce((total, price, index) => total + price * quantities[index], 0);
    return `${total} €`;
}

module.exports = getMoney;