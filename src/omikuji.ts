export class Omikuji {
    private static UNSEILIST = [
        "凶",
        "吉",
        "中吉",
        "大吉"
    ];

    constructor(private _items: OmikujiItem[]) {
        const min = 1 * _items.length;
        const max = 5 * _items.length;
        const total = _items.map(x => x.point).reduce((a, b) => a + b);
        const ratio = ((total - min) / (max - min));
        const index = Math.floor(ratio * Omikuji.UNSEILIST.length);
        this._unsei = Omikuji.UNSEILIST[index];
    }

    private _unsei: string;

    get unsei(): string {
        return this._unsei;
    }
}
