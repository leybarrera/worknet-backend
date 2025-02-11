import { DataTypes } from 'sequelize'

const JobApplicationModel = (sequelize) => {
  sequelize.define(
    'JobApplication',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      application_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      JobOfferId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'JobOffers',
          key: 'id',
        },
      },

      status: {
        type: DataTypes.ENUM,
        values: ['Pendiente', 'Aceptado', 'Rechazado'],
        defaultValue: 'Pendiente',
      },
    },
    {
      timestamps: false,
    }
  )
}

export default JobApplicationModel
