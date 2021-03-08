module.exports = (sequelize, DataTypes) => {

  const KbRegisters = sequelize.define('KbRegisters', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    car_brand: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    car_model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    car_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    desc_problem: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    desc_solution: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return KbRegisters;
}