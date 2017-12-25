import { Omikuji } from "./omikuji";
import { OmikujiItemBuilder } from "./omikujiItemBuilder";
import { RandomDescriptionEmitter } from "./randomOmikujiDescriptionEmitter";

// おみくじの各項目を作る

const builders = [
    new OmikujiItemBuilder("恋愛",
        new RandomDescriptionEmitter({
            1: ["諦めよ"],
            2: ["尽くすべし"],
            3: ["幸せ訪れる"],
            4: ["うまくいく"],
            5: ["よくモテる"]
        })
    )
];

const omikuji = new Array(300).fill(0).map(_ =>
    new Omikuji(builders.map(x => x.generate()))
);

omikuji.forEach(x => console.log(x));
