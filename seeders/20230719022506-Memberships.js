"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Memberships",
      [
        {
          user_id: 1,
          service_id: null,
          expiration_date: "2023-02-12 07:59:48",
          register_date: "2023-01-12 07:59:48",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          service_id: 3,
          expiration_date: "2023-03-11 07:59:48",
          register_date: "2023-02-12 07:59:48",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          service_id: 2,
          expiration_date: "2023-04-12 07:59:48",
          register_date: "2023-03-12 07:59:48",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          service_id: 1,
          expiration_date: "2023-05-12 07:59:48",
          register_date: "2023-04-12 07:59:48",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
