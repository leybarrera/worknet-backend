const remove = async (id) => {
  const rowsDeleted = await Interaction.destroy({
    where: {
      id,
    },
  })

  return rowsDeleted > 0
    ? { code: 200, message: 'Interacción eliminada con éxito' }
    : { code: 404, message: 'Interacción no encontrada' }
}

export default remove
