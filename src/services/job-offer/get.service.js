import { Company, JobOffer } from '../../lib/conn.js'

const getAll = async () => {
  const jobOffers = await JobOffer.findAll({
    include: [Company],
  })

  return { code: 200, jobOffers }
}
const getById = async (id) => {
  const jobOffer = await JobOffer.findOne({
    where: {
      id,
    },
  })
  return jobOffer
    ? { code: 200, jobOffer }
    : { code: 404, message: 'Oferta de trabajo no encontrada' }
}
const getByCompany = async (CompanyId) => {
  const jobOffers = await JobOffer.findAll({
    where: {
      CompanyId,
    },
    include: [Company],
  })
  return { code: 200, jobOffers }
}

export { getAll, getById, getByCompany }
