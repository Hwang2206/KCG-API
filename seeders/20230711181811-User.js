"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          user_name: "Nguyễn Đỗ Việt Hoàng",
          user_type: true,
          user_email: "hadesdetected@gmail.com",
          user_phone: "0909997979",
          user_password: "admin",
          user_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_name: "Hoàng Trung Phúc",
          user_type: false,
          user_email: "trungphuc12@gmail.com",
          user_phone: "0909997978",
          user_password: "phuc123",
          user_active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_name: "Huỳnh Nhật Tiến",
          user_type: false,
          user_email: "tien20k29@gmail.com",
          user_phone: "0909997977",
          user_password: "tien123",
          user_active: false,
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
