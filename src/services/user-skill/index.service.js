import register from './post.service.js'
import remove from './delete.service.js'
import { getAll, getBySkill, getByUser } from './get.service.js'

export default {
  register,
  getAll,
  getBySkill,
  getByUser,
}
