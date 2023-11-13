import { Router } from 'express'
import { quoterController } from '../../controllers/strategy/index.js'

export const strategyRouter = Router()

strategyRouter.get('/', (req, res) => {
    res.send('strategy!')
})

strategyRouter.get('/quote', quoterController)