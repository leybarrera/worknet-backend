import { DataTypes } from 'sequelize'

const LanguageModel = (sequelize) => {
  sequelize.define(
    'Language',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      proficiency: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default LanguageModel
