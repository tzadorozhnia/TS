const app = document.getElementById('app');
function exchange(umUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return umUAH / currencyValues[i].value;
        }
    }
    return 0;
}
let umUAH = 10000;
let currencyValues = [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }];
let exchangeCurrency = 'USD';
let res = exchange(umUAH, currencyValues, exchangeCurrency);
app.innerHTML += `
<p>${umUAH} грн = ${res} ${exchangeCurrency} </p>
`;
export {};
//# sourceMappingURL=script.js.map