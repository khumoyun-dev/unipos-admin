import React from 'react'
import DotsEditIcon from '../../assets/Svgs/DotsEditIcon'
import Badge from '../Badge/Badge'
import Table from '../Table/Table'
import iphone from "../../assets/images/iphone.jpg";

function Cash() {
  return (
    <>
      <Table
        headerOptions={[
          "qo’shish",
          "rasm",
          "mahsulot nomi",
          "kategoryasi",
          "narx",
          "status",
          "umumiy soni",
          "variant",
          "brend",
          ""
        ]}
        tableOptions={[
          (item) => <input type="checkbox" />,
          (item) => <img src={iphone} alt="img" />,
          (item) => "Iphone 13 pro max 128GB grey",
          (item) => "Telefon",
          (item) => "1 235 250.00 UZS",
          (item) => <Badge type="active">Aktiv</Badge>,
          (item) => "25 dona",
          (item) => "3",
          (item) => "Apple",
          (item) => <DotsEditIcon />
        ]}
      />
    </>
  )
}

export default Cash