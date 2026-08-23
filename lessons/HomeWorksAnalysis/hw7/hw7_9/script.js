// #gsKLAsNWM
//
// Через Array.prototype. створити власний foreach, filter
export {};
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            callback(this[i], i, this);
        }
    }
};
Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            const item = this[i];
            if (callback(item, i, this)) {
                result.push(item);
            }
        }
    }
    return result;
};
const arr = [1, 2, 3, 4, 5];
arr.myForEach(value => console.log(value * 2));
const result = arr.myFilter(value => value > 2);
console.log(result);
//# sourceMappingURL=script.js.map