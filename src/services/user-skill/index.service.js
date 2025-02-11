import register from './post.service.js'
import { getAll, getBySkill, getByUser } from './get.service.js'
import deleteUserSKill from './delete.service.js'

export default {
  register,
  getAll,
  getBySkill,
  getByUser,
  deleteUserSKill,
}
