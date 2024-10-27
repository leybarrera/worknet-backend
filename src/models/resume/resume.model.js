import { DataTypes } from 'sequelize'

const ResumeModel = (sequelize) => {
  sequelize.define(
    'Resume',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      file_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
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
    },
    { timestamps: false }
  )
}

export default ResumeModel
