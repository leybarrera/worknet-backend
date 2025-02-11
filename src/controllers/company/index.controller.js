import remove from './delete.controller.js'
import { getAll, getById, getByUser } from './get.controller.js'
import register from './post.controller.js'
import { update, recoveryCompany, updatePassword } from './put.controller.js'

export default {
  remove,
  getAll,
  getById,
  getByUser,
  register,
  update,
  recoveryCompany,
  updatePassword,
}
