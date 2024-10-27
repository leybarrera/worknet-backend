import { DataTypes } from 'sequelize'

const SkillModel = (sequelize) => {
  sequelize.define(
    'Skill',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  )
}

export default SkillModel
