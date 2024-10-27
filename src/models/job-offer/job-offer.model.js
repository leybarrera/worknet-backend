import { DataTypes } from 'sequelize'

const JobOfferModel = (sequelize) => {
  sequelize.define(
    'JobOffer',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      job_type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          'Tiempo completo',
          'Medio tiempo',
          'Contrato',
          'Freelance',
          'Practicante',
        ],
      },

      salary: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0,
        },
      },

      posted_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      ai_recommendation: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      CompanyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Companies',
          key: 'id',
        },
      },
    },
    { timestamps: false }
  )
}

export default JobOfferModel
