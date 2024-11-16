import { Router } from 'express'
import { userController } from '../../controllers/index.controllers.js'

const userRouter = Router()

userRouter.get('/', userController.getAll)
userRouter.get('/s/:id', userController.getById)
userRouter.get('/q', userController.getByEmail)
userRouter.get('/only/valids', userController.getOnlyValids)
userRouter.get('/only/actives', userController.getOnlyActives)
userRouter.get('/only/inactives', userController.getOnlyInactives)
userRouter.post('/', userController.register)
userRouter.delete('/:id', userController.remove)
userRouter.put('/:id', userController.update)
userRouter.put('/recovery/:id', userController.recoveryUser)

export default userRouter
