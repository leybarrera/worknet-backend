import { Router } from 'express'
import { userSkillController } from '../../controllers/index.controllers.js'

const userSkillRouter = Router()

userSkillRouter.get('/', userSkillController.getAll)
userSkillRouter.get('/user/:user_id', userSkillController.getByUser)
userSkillRouter.get('/skill/:skill_id', userSkillController.getBySkill)
userSkillRouter.post('/', userSkillController.register)

export default userSkillRouter
