interface OmikujiDescriptionEmitter {
    emit(point: number): string;
}

class DefaultDescriptionEmitter implements OmikujiDescriptionEmitter {
    emit(point: number): string {
        return "うまくいく";
    }
}
