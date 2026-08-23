// Приклад моделі об'єкту карти:
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//
//     color:'', // 'red','black'
// }
const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];
for (let i = 0; i < suits.length; i++) {
    const color = (suits[i] === 'heart' || suits[i] === 'diamond') ? 'red' : 'black';
    for (let j = 0; j < values.length; j++) {
        deck.push({
            value: values[j],
            suit: suits[i],
            color: color
        });
    }
}
console.log('Колода');
console.log(deck);
console.log('знайти піковий туз');
let spadeAce = deck.find((card => card.suit === 'spade' && card.value === 'ace'));
console.log(spadeAce);
console.log('всі шістки');
let AllSix = deck.filter(card => card.value === '6');
console.log(AllSix);
console.log('всі червоні карти');
let AllRed = deck.filter(card => card.color === 'red');
console.log(AllRed);
console.log('всі буби');
let AllDiamond = deck.filter(card => card.suit === 'diamond');
console.log(AllDiamond);
console.log('всі трефи від 9 та більше');
let val = ['9', '10', 'jack', 'queen', 'king', 'ace'];
let AllClubs = deck.filter(card => {
    return card.suit === 'clubs' && val.includes(card.value);
});
console.log(AllClubs);
const deckPack = deck.reduce((acc, card) => {
    if (card.suit === 'spade') {
        acc.spades.push(card);
    }
    else if (card.suit === 'diamond') {
        acc.diamonds.push(card);
    }
    else if (card.suit === 'heart') {
        acc.hearts.push(card);
    }
    else {
        acc.clubs.push(card);
    }
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
console.log(deckPack);
export {};
//# sourceMappingURL=script.js.map