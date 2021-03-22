export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("users", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING(30),
      primaryKey: true,
    },
    password: {
      type: Sequelize.STRING(60),
    },
    email_verfied: {
      type: Sequelize.DATE,
    },
    createdAt: {
      //建立時間
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      //更新時間
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("users");
}
