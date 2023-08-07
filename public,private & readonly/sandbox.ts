class invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

const invOne = new invoice('mario', 'work on the mario website', 250);
const invtwo = new invoice('luigi', 'work on the luigi website', 300);

// how to push 

let invoices: invoice[] = [];

invoices.push(invOne);
invoices.push(invtwo);

console.log(invoices)

invoices.forEach(inv => {

    console.log(inv.client, inv.amount, inv.format());
});