module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Organizations', [
    {
      org_name: 'BYO Energy',
      user_id_fk: [1, 2, 3, 4],
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Organizations', null, {});
  }
};

