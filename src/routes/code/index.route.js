import { Router } from 'express'
import { codeController } from '../../controllers/index.controllers.js'

const codeRouter = Router()

codeRouter.put('/verificate-code', codeController.verificateCode)

export default codeRouter
