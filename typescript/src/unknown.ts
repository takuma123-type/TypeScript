export {};

const time = (): number => 43;

let numberAny: any = time();
let numberUnknown: unknown = time();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number' ) {
    let sumUnknown = numberUnknown + 10;
}


