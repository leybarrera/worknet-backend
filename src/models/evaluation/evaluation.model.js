import { DataTypes } from 'sequelize'

const EvaluationModel = (sequelize) => {
  sequelize.define(
    'Evaluation',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      JobOfferId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'JobOffers',
          key: 'id',
        },
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      score: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0,
          max: 10,
        },
      },

      evaluation_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { timestamps: false }
  )
}

export default EvaluationModel
