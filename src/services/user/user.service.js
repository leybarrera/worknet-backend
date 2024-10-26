import deleteUser from './delete.service.js'
import {
  getActiveUsers,
  getAll,
  getByDni,
  getByEmail,
  getById,
} from './get.service'
import registerUser from './post.service.js'
import { disableUser, enableUser, updateUser } from './put.service.js'

export default {
  deleteUser,
  getActiveUsers,
  getAll,
  getByDni,
  getByEmail,
  getById,
  registerUser,
  updateUser,
  disableUser,
  enableUser,
}
