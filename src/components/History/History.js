import React from 'react'
import DotsEditIcon from '../../assets/Svgs/DotsEditIcon'
import Table from '../Table/Table'

function History() {
  return (
    <>
      <Table
        headerOptions={[
          <input type="checkbox" className="table-checkbox" />,
          "chek №",
          "do’koon filial",
          "umumiy summa",
          "kassir",
          "mahsulotlar soni",
          "sana",
          "vaqti"
        ]}
        tableOptions={[
          (item) => <input type="checkbox" />,
          (item) => "20",
          (item) => "M/ Ulugbek filiali",
          (item) => "1 235 250.00 UZS",
          (item) => "Olim Ochilov",
          (item) => "22",
          (item) => "22.01.2022",
          (item) => "12:01:57",
          (item) => <DotsEditIcon />
        ]}
      />
    </>
  )
}

export default History