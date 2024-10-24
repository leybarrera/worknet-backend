import { DataTypes } from 'sequelize'

const ApplicationModel = (sequelize) => {
  sequelize.define(
    'Application',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      ApplicantId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Applicants',
          key: 'id',
        },
      },

      OfferId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Offers',
          key: 'id',
        },
      },

      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM,
        values: ['Pendiente', 'Aceptada', 'Rechazada'],
        defaultValue: 'Pendiente',
      },

      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  )
}

export default ApplicationModel
