import { DataTypes } from 'sequelize'

const OfferModel = (sequelize) => {
  sequelize.define(
    'Offer',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      job_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      requirements: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      publication_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      expiration_date: {
        type: DataTypes.DATE,
      },

      salary: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      modality: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['Tiempo Completo', 'Medio Tiempo', 'Remoto', 'Hibrido'],
      },

      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      EmployerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Employers',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default OfferModel
