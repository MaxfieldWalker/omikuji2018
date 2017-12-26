import * as fs from "fs";
import { Omikuji } from "./omikuji";
import { OmikujiItemBuilder } from "./omikujiItemBuilder";
import { RandomDescriptionEmitter } from "./randomOmikujiDescriptionEmitter";

// おみくじの各項目を作る

const builders = [
    new OmikujiItemBuilder("恋愛",
        new RandomDescriptionEmitter({
            1: ["諦めよ"],
            2: ["尽くすべし"],
            3: ["チャンス来る"],
            4: ["うまくいく", "幸せ手にする"],
            5: ["よくモテる"]
        })
    ),
    new OmikujiItemBuilder("レポート",
        new RandomDescriptionEmitter({
            1: ["CLE繋がらない", "ファイル紛失"],
            2: ["提出忘れる"],
            3: ["よく書ける"],
            4: ["評価良し"],
            5: ["褒められる"]
        })),
    new OmikujiItemBuilder("テスト",
        new RandomDescriptionEmitter({
            1: ["単位落とす"],
            2: ["寝坊する"],
            3: ["よくできる"],
            4: ["過去問手に入る"],
            5: ["フル単"]
        })),
    new OmikujiItemBuilder("金銭",
        new RandomDescriptionEmitter({
            1: ["財布なくす"],
            2: ["大切に使え"],
            3: ["増えず減らず", "困らない"],
            4: ["貯まる"],
            5: ["拾う"]
        })),
    new OmikujiItemBuilder("健康",
        new RandomDescriptionEmitter({
            1: ["気をつけよ"],
            2: ["歳を感じる"],
            3: ["病なし"],
            4: ["育つ"],
            5: ["すこぶる良し"]
        })),
    new OmikujiItemBuilder("旅行",
        new RandomDescriptionEmitter({
            1: ["南極"],
            2: ["中四国"],
            3: ["タイ", "エジプト"],
            4: ["イタリア", "ドイツ", "オーストラリア", "アメリカ"],
            5: ["スウェーデン", "ノルウェー"]
        })),
    new OmikujiItemBuilder("友人",
        new RandomDescriptionEmitter({
            1: ["大事にせよ", "失う"],
            2: ["増やすべし"],
            3: ["増える"],
            4: ["親友できる"],
            5: ["恋人になる"]
        })),
    new OmikujiItemBuilder("SNS",
        new RandomDescriptionEmitter({
            1: ["ブロックされる"],
            2: ["パスワード紛失"],
            3: ["いいね"],
            4: ["映える"],
            5: ["バズる"]
        }))
];

const omikuji = new Array(300).fill(0).map(_ =>
    new Omikuji(builders.map(x => x.generate()))
);

const header = [
    "運勢", "トータル", "恋愛", "レポート", "テスト", "金銭", "健康", "旅行", "友人", "SNS"
].join(",");

const s = [
    header,
    ...omikuji.map(x => x.toCSV())
].join("\r\n");
fs.writeFileSync("./out.csv", s);
