type TCurrencyValues ={
    currency: string;
    value: number;
}

const app = document.getElementById('app') as HTMLElement;

function exchange(umUAH:number, currencyValues:TCurrencyValues[], exchangeCurrency:string):number {
    for (let i:number = 0; i < currencyValues.length; i++) {
        if (currencyValues[i]!.currency === exchangeCurrency) {
            return umUAH / currencyValues[i]!.value;
        }
    }
    return 0
}

let umUAH:number = 10000;
let currencyValues:TCurrencyValues[] = [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}];
let exchangeCurrency:string = 'USD'
let res:number = exchange(umUAH, currencyValues, exchangeCurrency)
app.innerHTML +=`
<p>${umUAH} грн = ${res} ${exchangeCurrency} </p>
`