import { DataTypes } from 'sequelize'

const ConnectionModel = (sequelize) => {
  sequelize.define(
    'Connection',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      UserSourceId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      UserTargetId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      status: {
        type: DataTypes.ENUM,
        values: ['Pendiente', 'Aceptada'],
        defaultValue: 'Pendiente',
      },

      request_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      acceptance_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    { timestamps: false }
  )
}

export default ConnectionModel
