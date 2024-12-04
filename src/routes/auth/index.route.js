import { Router } from 'express'
import { authController } from '../../controllers/index.controllers.js'

const authRouter = Router()

authRouter.post('/login', authController.login)
authRouter.get('/account-activation', authController.accountActivation)

export default authRouter
