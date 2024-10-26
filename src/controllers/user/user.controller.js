import registerUser from '../../services/user/post.service.js'
import deleteUser from './delete.controller.js'
import {
  getActiveUsers,
  getAll,
  getById,
  getByEmail,
  getByDni,
} from './get.controller.js'

export default {
  registerUser,
  getActiveUsers,
  getAll,
  getById,
  getByEmail,
  getByDni,
  deleteUser,
}
