import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import charactersRoutes from './routes/characters.js'
import singleCharactersRoutes from './routes/singlecharacters.js'
import fruitsRoutes from './routes/fruits.js'

import extractNameMiddleware from './middleware/extractname.js';

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/characters', charactersRoutes)
app.use('/singlecharacters/:name', extractNameMiddleware, singleCharactersRoutes)
app.use('/fruits', fruitsRoutes)
app.get('/', (req, res) => res.send("Welcome to One Piece API"))

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server running on ${PORT}`)
            console.log(process.env.CONNECTION_URL)
        })
    })
    .catch(error => console.error(error))