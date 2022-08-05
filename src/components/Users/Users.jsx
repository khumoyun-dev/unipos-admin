import React from "react";
import Table from "../Table/Table";
import Badge from "../Badge/Badge";
import user from "../../assets/images/user.jpg";
import TickBadge from "../../assets/Svgs/TickBadge";
import DotsEditIcon from "../../assets/Svgs/DotsEditIcon";

function Users() {
  return (
    <>
      <Table
        headerOptions={[
          <input type="checkbox" className="table-checkbox" />,
          "rasm",
          "ism familya",
          "kasbi",
          "do’kon",
          "mahsulotlar qo’sha olish",
          "narxlarni o’zgartira olish",
          "hisobotlarga kirish",
          "foydalanuvchi qo’sha olish",
          ""
        ]}
        tableOptions={[
          (item) =>  <input type="checkbox" />,
          (item) => <img src={user} alt="img" />,
          (item) => "Ali Olimov",
          (item) => "Kassir",
          (item) => "M. Ullugbek filiali",
          (item) => <Badge type="enabled"> <TickBadge /> </Badge>,
          (item) => "25 dona",
          (item) => "3",
          (item) => "Apple",
          (item) => <DotsEditIcon />
        ]}
      />
    </>
  );
}

export default Users;
