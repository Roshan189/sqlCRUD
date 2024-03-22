module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("employee", {
    name: {
      type: DataTypes.STRING,
      // allowNull: true,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
      // allowNull: true,
      unique: true,
    },
    experience: {
      type: DataTypes.INTEGER,
      // allowNull: true,
      unique: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      // allowNull: true,
      unique: true,
    },
  });

  return Employee;
};
