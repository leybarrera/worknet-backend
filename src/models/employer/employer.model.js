import { DataTypes } from 'sequelize'

const EmployerModel = (sequelize) => {
  sequelize.define(
    'Employer',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      UsuarioId: {
        type: DataTypes.UUID,
        allowNull: false,

        references: {
          model: 'Users',
          key: 'id',
        },
      },

      CompanyId: {
        type: DataTypes.UUID,
        allowNull: false,

        references: {
          model: 'Companies',
          key: 'id',
        },
      },
    },
    { timestamps: false }
  )
}

export default EmployerModel
