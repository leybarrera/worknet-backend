import { connectionService } from '../../services/index.services.js'

// Pega tu código aqui

const update = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const { code, message } = await connectionService.updateStatus(id, data)

    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: `Error interno en el servidor. ${error}`,
    })
  }
}

export default update
