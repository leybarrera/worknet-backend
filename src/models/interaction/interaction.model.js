import { DataTypes } from 'sequelize'

const InteractionModel = (sequelize) => {
  sequelize.define(
    'Interaction',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      interaction_type: {
        type: DataTypes.ENUM,
        values: ['ChatBot', 'Voice'],
        allowNull: false,
      },

      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      response: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      interaction_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { timestamps: false }
  )
}

export default InteractionModel
