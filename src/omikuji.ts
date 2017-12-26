
export class Omikuji {
    private static UNSEILIST = [
        "大凶",
        "凶",
        "末吉",
        "吉",
        "小吉",
        "中吉",
        "大吉"
    ];

    private static computeUnsei(items: OmikujiItem[]): string {
        const min = 1 * items.length;
        const max = 5 * items.length;
        const total = items.map(x => x.point).reduce((a, b) => a + b);
        const ratio = ((total - min) / (max - min));
        const index = Math.round(ratio * Omikuji.UNSEILIST.length);

        return Omikuji.UNSEILIST[index];
    }

    private _unsei: string;

    get unsei(): string {
        return this._unsei;
    }

    constructor(private _items: OmikujiItem[]) {
        this._unsei = Omikuji.computeUnsei(_items);
    }

    toCSV(): string {
        return [this.unsei,
        this._items.map(x => x.point).reduce((a, b) => a + b).toString(),
        ...this._items.map(x => x.description)]
            .join(",");
    }
}
