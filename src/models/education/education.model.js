import { DataTypes } from 'sequelize'

const EducationModel = (sequelize) => {
  sequelize.define(
    'Education',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      institution: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      degree_obtained: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
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
    { timestamps: false }
  )
}

export default EducationModel
