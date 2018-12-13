module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    organisation: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true
    },
    regno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1500
    },
    access: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    }
  });
  return User;
};
