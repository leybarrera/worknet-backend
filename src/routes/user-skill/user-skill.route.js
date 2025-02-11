import { Router } from 'express'
import { userSkillController } from '../../controllers/index.controllers.js'

const userSkillRouter = Router()

userSkillRouter.get('/', userSkillController.getAll)
userSkillRouter.get('/user/:id', userSkillController.getByUser)
userSkillRouter.get('/skill/:skill_id', userSkillController.getBySkill)
userSkillRouter.post('/', userSkillController.register)
userSkillRouter.delete('/:id', userSkillController.deleteUserSkill)

export default userSkillRouter
