import { Company } from '../../lib/conn'

const companyExists = async (id) => {
  const company = await Company.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
  return company
}
const register = async (data) => {
  const { CompanyId } = data

  if (!(await companyExists(CompanyId)))
    return { code: 400, message: 'Empresa no encontrada' }

  const jobOffer = await JobOffer.create(data)
  return jobOffer
    ? { code: 201, message: 'Oferta de trabajo creada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo crear la oferta de trabajo. Por favor, inténtelo más tarde',
      }
}
export default register
