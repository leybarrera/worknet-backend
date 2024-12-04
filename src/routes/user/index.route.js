import { Router } from 'express'
import { userController } from '../../controllers/index.controllers.js'
import { multerHelper } from '../../helpers/index.helpers.js'

const userRouter = Router()

userRouter.get('/', userController.getAll)
userRouter.get('/s/:id', userController.getById)
userRouter.get('/q', userController.getByEmail)
userRouter.get('/only/valids', userController.getOnlyValids)
userRouter.get('/only/actives', userController.getOnlyActives)
userRouter.get('/only/inactives', userController.getOnlyInactives)
userRouter.get(
  '/recommendations/user-logged',
  userController.getRecommendationsUserLogged
)
userRouter.get(
  '/recommendations/user-not-logged',
  userController.getRecommendationsUserNotLogged
)
userRouter.post('/', userController.register)
userRouter.delete('/:id', userController.remove)
userRouter.put('/:id', userController.update)
userRouter.put('/recovery/:id', userController.recoveryUser)

userRouter.put(
  '/settings/:id',
  multerHelper.upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'resume', maxCount: 1 },
  ]),
  userController.updateProfile
)

export default userRouter
