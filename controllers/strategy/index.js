import { QuoterContext } from './context.js'
import { LocalStrategy } from './localStrategy.js'

const amount = 20
const gain = .7


export function quoterController(req, res) {

    const quoter = new QuoterContext(new LocalStrategy, gain)

    const result = quoter.quote(amount) //ideal to add price as parameter

    res.json(result)

}
