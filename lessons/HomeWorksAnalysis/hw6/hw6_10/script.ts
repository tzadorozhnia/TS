// Приклад моделі об'єкту карти:
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//
//     color:'', // 'red','black'
// }


const suits:string[] = ['spade', 'diamond', 'heart', 'clubs'] as const;
const values:string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'] as const;


type TSuit = typeof suits[number];
type TValue = typeof values[number];
type TColor = 'red' | 'black';



type TCard = {
    value: TValue;
    suit: TSuit;
    color: TColor;
}
const deck:TCard[] = [];

for (let i:number = 0; i < suits.length; i++) {
    const color:TColor = (suits[i] === 'heart' || suits[i] === 'diamond') ? 'red' : 'black';
    for (let j:number = 0; j < values.length; j++) {
        deck.push({
            value: values[j]!,
            suit: suits[i]!,
            color: color
        });
    }
}
console.log('Колода');
console.log(deck);


console.log('знайти піковий туз');
let spadeAce = deck.find((card => card.suit==='spade'&&card.value==='ace'));
console.log(spadeAce);

console.log('всі шістки');
let AllSix = deck.filter(card => card.value==='6');
console.log(AllSix);

console.log('всі червоні карти');
let AllRed = deck.filter(card => card.color==='red');
console.log(AllRed);

console.log('всі буби');
let AllDiamond = deck.filter(card => card.suit==='diamond');
console.log(AllDiamond);

console.log('всі трефи від 9 та більше');
let val = ['9','10','jack','queen','king','ace'];
let AllClubs = deck.filter(card => {
    return card.suit==='clubs'&&val.includes(card.value)
});
console.log(AllClubs);

// Взяти описану колоду карт, та за допомогою reduce "упакувати" всі карти по "мастях" в об'єкт

type TDeckPack = {
    spades: TCard[];
    diamonds: TCard[];
    hearts: TCard[];
    clubs: TCard[];
}

const deckPack = deck.reduce<TDeckPack>((acc, card) => {
        if (card.suit === 'spade') {
            acc.spades.push(card);
        } else if (card.suit === 'diamond') {
            acc.diamonds.push(card);
        } else if (card.suit === 'heart') {
            acc.hearts.push(card);
        } else {
            acc.clubs.push(card);
        }
        return acc;
    },
    {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(deckPack);