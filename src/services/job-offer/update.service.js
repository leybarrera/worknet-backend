import { JobOffer } from '../../lib/conn.js'

const update = async (id, data) => {
  const jobOffer = await JobOffer.findOne({
    where: {
      id,
    },
  })

  if (!jobOffer)
    return { code: 404, message: 'Oferta de trabajo no encontrada' }
  const [rows] = await jobOffer.update(data)

  return rows > 0
    ? { code: 200, message: 'Oferta de trabajo actualizada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo actualizar la oferta de trabajo. Por favor, inténtelo más tarde',
      }
}

export default update
