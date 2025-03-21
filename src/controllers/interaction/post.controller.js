import { format, parse } from 'date-fns'
import { interactionService } from '../../services/index.services.js'

const register = async (req, res) => {
  try {
    const formattedDate = format(new Date(), 'dd-MM-yyyy HH:mm')
    const parsedDate = parse(formattedDate, 'dd-MM-yyyy HH:mm', new Date())
    const data = {
      ...req.body,
      interacted_at: parsedDate,
    }
    const { code, message } = await interactionService.register(data)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export default register
