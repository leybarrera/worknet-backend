import register from './post.service.js'
import { update, recoveryCompany } from './update.service.js'
import remove from './delete.service.js'
import { getAll, getById, getByUser } from './get.service.js'

export default {
  register,
  update,
  remove,
  recoveryCompany,
  getAll,
  getById,
  getByUser,
}
