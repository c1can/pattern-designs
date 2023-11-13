import express from 'express'
import { strategyRouter } from './routes/strategy/index.js'

const app = express()

app.use('/strategy', strategyRouter)

app.use('/', (req, res) => {
    res.send('hola mundo!')
})


app.listen(3001, () => {
    console.log('http://localhost:3001')
})