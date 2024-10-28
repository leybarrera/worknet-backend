import { Op } from 'sequelize'
import { Message } from '../../lib/conn.js'

const getConversation = async (RecipientId, SenderId) => {
  const messages = await Message.findAll({
    where: {
      RecipientId,
      SenderId,
    },
    order: [['sent_at', 'ASC']],
  })
  return { code: 200, messages }
}

const getByUser = async (id) => {
  const messages = await Message.findAll({
    where: {
      [Op.or]: [{ RecipientId: id }, { SenderId: id }],
    },

    order: [['sent_at', 'ASC']],
  })

  return { code: 200, messages }
}

export { getConversation, getByUser }
