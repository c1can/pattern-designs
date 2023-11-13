export class LocalStrategy { 
    constructor() {}

    quote(amount, gain) { 
        return amount * (gain - .1)
    }
}