import { DefaultOmikujiPointEmitter, OmikujiPointEmitter } from "./omikujiPointEmitter";

export class OmikujiItemBuilder {

    constructor(
        public name: string,
        private _descriptionEmitter: OmikujiDescriptionEmitter,
        private _pointEmitter: OmikujiPointEmitter = new DefaultOmikujiPointEmitter()
    ) {

    }

    public generate(): OmikujiItem {
        const p = this._pointEmitter.emit();

        return {
            name: this.name,
            point: p,
            description: this._descriptionEmitter.emit(p)
        };
    }
}
