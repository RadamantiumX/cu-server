import express, { json } from 'express'
import { corsMiddlewares } from './middlewares/cors'

export const createApp = ({ model }) => {
    const app = express()

    app.use(json())

    app.use(corsMiddlewares())

    app.disable('x-powered-by')

    app
}