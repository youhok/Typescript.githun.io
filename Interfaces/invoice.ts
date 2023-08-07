import { HasFromatter } from './Hasformatter.js';

export class invoice implements HasFromatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
