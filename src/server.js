import express, { json } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

const server = express()

server.use(json({ limit: '50mb' }))
server.use(cookieParser())
server.use(logger('dev'))
server.use(cors())

export default server
