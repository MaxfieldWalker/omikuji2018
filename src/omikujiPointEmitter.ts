export interface OmikujiPointEmitter {
    /**
     * おみくじの(内部的な)得点
     * 1~5の値を取る
     */
    emit(): number;
}

export class DefaultOmikujiPointEmitter implements OmikujiPointEmitter {
    emit(): number {
        // ランダムで1~5を返す
        return Math.round(Math.random() * 4) + 1;
    }
}
