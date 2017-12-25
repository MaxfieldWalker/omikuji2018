export class RandomDescriptionEmitter implements OmikujiDescriptionEmitter {
    constructor(
        private _content: {
            1: string[];
            2: string[];
            3: string[];
            4: string[];
            5: string[];
        }
    ) {
        const a = Object.values(_content)
            .map(x => x.length)
            .filter(x => x == 0).length;
        if (a != 0) {
            throw Error("各点数に一つ以上のひとことを指定してください");
        }
    }

    emit(point: number): string {
        if ([1, 2, 3, 4, 5].includes(point)) {
            const values = this._content[point.toString()] as string[];
            const index = Math.floor(Math.random() * (values.length - 1));

            return values[index];
        } else {
            throw new Error(`不正な点数です: ${point}`);
        }
    }
}
