import { jobOfferService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, jobOffers } = await jobOfferService.getAll()
    return res.status(code).json({ jobOffers })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno en el servidor. ${error}` })
  }
}

const getById = async (req, res) => {
  try {
    const { code, message, jobOffer } = await jobOfferService.getById()
    return res.status(code).json(message ? { message } : { jobOffer })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno en el servidor. ${error}` })
  }
}

export { getAll, getById }
