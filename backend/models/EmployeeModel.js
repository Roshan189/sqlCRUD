module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("employee", {
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    experience: {
      type: DataTypes.INTEGER,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
  });

  return Employee;
};
