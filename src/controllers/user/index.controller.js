import remove from './delete.controller.js'
import {
  getAll,
  getById,
  getByEmail,
  getOnlyValids,
  getOnlyActives,
  getOnlyInactives,
} from './get.controller.js'
import register from './post.controller.js'
import { update, recoveryUser } from './put.controller.js'

export default {
  remove,
  getAll,
  getById,
  getByEmail,
  getOnlyValids,
  getOnlyActives,
  getOnlyInactives,
  register,
  update,
  recoveryUser,
}
