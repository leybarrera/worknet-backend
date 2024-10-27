import register from './post.service.js'
import remove from './delete.service.js'
import { getByUser, getConversation } from './get.service.js'
import updateIsRead from './update.service.js'

export default {
  register,
  updateIsRead,
  remove,
  getByUser,
  getConversation,
}
