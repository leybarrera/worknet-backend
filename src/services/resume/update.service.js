import { Resume } from '../../lib/conn.js'

const update = async (id, file_url) => {
  const [rows] = await Resume.update(
    { file_url },
    {
      where: {
        id,
      },
    }
  )

  return rows > 0
    ? { code: 200, message: 'Currículum actualizado con éxito' }
    : { code: 404, message: 'Currículum no encontrado' }
}

export default update
