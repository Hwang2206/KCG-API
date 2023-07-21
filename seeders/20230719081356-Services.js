"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Services",
      [
        {
          service_name: "Yoga",
          service_price: 4000000,
          service_url:
            "https://cali.vn/storage/app/media/2021/Services/Coaching/Yoga/Section02_900x600_nguoimoibatdau.jpg",
          service_description: "Yoga tập cho giãn cơ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          service_name: "Aerobich",
          service_price: 5000000,
          service_url:
            "https://cali.vn/storage/app/media/2021/Services/Coaching/Dance/Cai-thien-su-tu-tin.jpg",
          service_description: "Aerobich tập cho giảm mỡ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          service_name: "Đạp xe",
          service_price: 2500000,
          service_url:
            "https://cali.vn/storage/app/media/2021/Services/GroupX/Chuong-trinh-da-dang.jpg",
          service_description: "Đạp xe cho chắc chân",
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
