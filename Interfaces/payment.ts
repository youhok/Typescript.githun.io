import { HasFromatter } from './Hasformatter.js';

export class payment implements HasFromatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.recipient} is owes ${this.amount} for ${this.details}`;
    }
}
