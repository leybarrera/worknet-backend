import { DataTypes } from 'sequelize'

const CertificationModel = (sequelize) => {
  sequelize.define(
    'Certification',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      issuing_institution: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      obtained_date: {
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
    {
      timestamps: false,
    }
  )
}

export default CertificationModel
