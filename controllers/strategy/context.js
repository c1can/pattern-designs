export class QuoterContext {
    constructor(strategy, gain) {
        this.strategy = strategy
        this.gain = gain
    }

    quote(amount) { 
        return this.strategy.quote(amount, this.gain)
    }
}