const remove = async (id) => {
  const rowsDeleted = await Certification.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Certificación eliminada con éxito' }
    : {
        code: 404,
        message: 'Sin cambios realizados. Certificación no encontrada',
      }
}

export default remove
