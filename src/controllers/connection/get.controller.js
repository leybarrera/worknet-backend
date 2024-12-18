import { connectionService } from '../../services/index.services.js'

const getByUser = async (req, res) => {
  try {
    const { id: UserSourceId } = req.params
    const { code, message, connections } = await connectionService.getByUser(
      UserSourceId
    )

    return res.status(code).json(message ? { message } : { connections })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno en el servidor. ${error}`,
    })
  }
}

const getPendingConnections = async (req, res) => {
  try {
    const { id: UserSourceId } = req.body
    const { code, message, connections } = await connectionService.getByUser(
      UserSourceId
    )

    return res.status(code).json(message ? { message } : { connections })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno en el servidor. ${error}`,
    })
  }
}

export { getByUser, getPendingConnections }
