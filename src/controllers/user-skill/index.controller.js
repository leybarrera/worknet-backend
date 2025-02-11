import deleteUserSkill from './delete.controller.js'
import { getAll, getBySkill, getByUser } from './get.controller.js'
import register from './post.controller.js'
export default {
  getAll,
  getBySkill,
  getByUser,
  register,
  deleteUserSkill,
}
