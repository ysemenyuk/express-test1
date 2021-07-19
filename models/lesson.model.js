
export default (sequelize, DataTypes) =>
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
