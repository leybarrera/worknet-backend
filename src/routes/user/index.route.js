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
userRouter.put('/recovery/:id', userController.recoveryUser)

userRouter.put(
  '/:id',
  multerHelper.upload.fields([{ name: 'image', maxCount: 1 }]),
  userController.updateUserInfo
)

userRouter.put(
  '/:id/resume',
  multerHelper.upload.fields([{ name: 'resume', maxCount: 1 }]),
  userController.updateUserResume
)

userRouter.put('/:id/education', userController.updateUserEducation)
userRouter.put('/:id/experience', userController.updateUserWorkExperience)
userRouter.put('/:id/skills', userController.updateUserSkills)
userRouter.put('/:id/languages', userController.updateUserLanguage)
userRouter.put('/:id/references', userController.updateUserReferences)

// Get Other Users
userRouter.get('/others/:user_id', userController.getOtherUsers)

export default userRouter
