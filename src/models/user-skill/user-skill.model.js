import { DataTypes } from 'sequelize'

const UserSkillModel = (sequelize) => {
  sequelize.define(
    'UserSkill',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      SkillId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Skills',
          key: 'id',
        },
      },

      years_of_experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 40,
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default UserSkillModel
