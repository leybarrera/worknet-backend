import { connectionService } from '../../services/index.services.js'

const remove = async (req, res) => {
  try {
    const { user_id: UserSourceId, friend_id: UserTargetId } = req.query
    const { code, message } = await connectionService.remove(
      UserSourceId,
      UserTargetId
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno en el servidor. ${error}`,
    })
  }
}

export default remove
