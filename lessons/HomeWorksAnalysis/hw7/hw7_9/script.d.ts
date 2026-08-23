export {};
declare global {
    interface Array<T> {
        myFilter(callback: (value: T, index: number, array: T[]) => boolean): T[];
        myForEach(callback: (value: T, index: number, array: T[]) => void): void;
    }
}
//# sourceMappingURL=script.d.ts.map