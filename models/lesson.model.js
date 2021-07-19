import sequelize from 'sequelize';
const { DataTypes } = sequelize;

export default (sequelize) =>
  sequelize.define(
    'lesson',
    {
      title: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
    }
  );
