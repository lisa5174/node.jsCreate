export default (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(30),
        unique: true,
      },
      password: {
        type: DataTypes.STRING(60),
      },
      email_verified: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modeName: "users",
      freezeTableName: true,
    }
  );
  return users;
};
