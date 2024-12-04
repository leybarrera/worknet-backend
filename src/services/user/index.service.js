import register from './post.service.js'
import { update, recoveryUser, updateProfile } from './update.service.js'
import remove from './delete.service.js'
import {
  getAll,
  getById,
  getOnlyActives,
  getOnlyInactives,
  getRecommendationsUserLogged,
  getRecommendationsUserNotLogged,
  getOnlyValids,
  getByEmail,
} from './get.service.js'

export default {
  register,
  update,
  remove,
  recoveryUser,
  getAll,
  getById,
  getOnlyActives,
  getOnlyInactives,
  getOnlyValids,
  getRecommendationsUserLogged,
  getRecommendationsUserNotLogged,
  getByEmail,
  updateProfile,
}
