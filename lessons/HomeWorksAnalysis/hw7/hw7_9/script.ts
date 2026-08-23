// #gsKLAsNWM
//
// Через Array.prototype. створити власний foreach, filter
export {};

declare global {
interface Array<T> {
    myFilter(
        callback: (value: T, index: number, array: T[]) => boolean
    ): T[];

    myForEach(
        callback: (value: T, index: number, array: T[]) => void
    ): void;
}
}

Array.prototype.myForEach = function <T>(
    this: T[],
    callback: (value: T, index: number, array: T[]) => void
): void {
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            callback(this[i]!, i, this);
        }
    }
};

Array.prototype.myFilter = function <T>(
    this: T[],
    callback: (value: T, index: number, array: T[]) => boolean
): T[] {
    const result: T[] = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            const item = this[i]!;

            if (callback(item, i, this)) {
                result.push(item);
            }
        }
    }

    return result;
};

const arr: number[] = [1, 2, 3, 4, 5];

arr.myForEach(value => console.log(value * 2));

const result = arr.myFilter(value => value > 2);

console.log(result);