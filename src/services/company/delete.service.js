import { Company } from '../../lib/conn.js'

const remove = async (id) => {
  const company = await Company.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!company) return { code: 400, message: 'Empresa no encontrada' }

  company.isDeleted = true
  await company.save()
  return { code: 200, message: 'Empresa eliminada con éxito' }
}

export default remove
