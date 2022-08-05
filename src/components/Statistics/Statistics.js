import React from 'react'
import DotsEditIcon from '../../assets/Svgs/DotsEditIcon'
import Table from '../Table/Table'

function Statistics() {
  return (
    <>
      <Table
        headerOptions={[
          <input type="checkbox" className="table-checkbox" />,
          "hisobot №",
          "sana",
          "do’koon filial",
          "umumiy summa",
          "birinchi chek №",
          "oxirgi chek №",
          "umumiy cheklar soni",
          ""
        ]}
        tableOptions={[
          (item) => <input type="checkbox" />,
          (item) => "20",
          (item) => "22.01.2022",
          (item) => "M/ Ulugbek filiali",
          (item) => "1 235 250.00 UZS",
          (item) => "15",
          (item) => "22",
          (item) => "7",
          (item) => <DotsEditIcon />
        ]}
      />
    </>
  )
}

export default Statistics