import React, { useEffect, useState } from "react";
import "./Table.scss";
import useToken from "../../hooks/useToken";
import AddIcon from "../../assets/Svgs/AddIcon";
import Tabs from "../Tabs/Tabs";
import SearchInput from "../Search/SearchInput";
import SearchResult from "../Search/SearchResult";
import Alert from "../Alert/Alert";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";
import { client } from "../../utils/api-client";
import Loader from "../Loader/Loader";

const Table = ({
  endPoint,
  queryParams,
  idName = "id",
  dataName,
  heading,
  headerOptions,
  tableOptions,
  refetch,
  isFilterable = false,
  filterOptions,
}) => {
  const [token] = useToken();
  const [tableData, setTableData] = useState({ rows: [{ id: 1 }] });
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(true);
  const [loader, setLoader] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  //////////////////////////
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = (evt) => {
    if (evt.target.value.trim() === "") {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  };
  ////////////////////////

  // Handle filter query options
  const [filterQueryParams, setFilterQueryParams] = useState(queryParams);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // useEffect(() => {
  //   setLoader(true);

  //   client(
  //     `${endPoint}?page=${
  //       currentPage - 1
  //     }&size=${pageSize}${filterQueryParams}`,
  //     {
  //       headers: {
  //         authorization: token,
  //       },
  //       method: "GET",
  //     }
  //   )
  //     .then((data) => {
  //       console.log("table data", data);
  //       if (data.data && data.data[dataName]) {
  //         setTableData(data.data[dataName]);
  //       }
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setAlert(true);
  //     })
  //     .finally(() => setLoader(false));
  // }, [
  //   currentPage,
  //   endPoint,
  //   pageSize,
  //   filterQueryParams,
  //   dataName,
  //   token,
  //   refetch,
  // ]);

  const filterCallback = (row, searchStr) => {
    let isPushable = false;
    if (typeof row === "object") {
      Object.entries(row).forEach(([, value]) => {
        if (
          Object.prototype.toString.apply(value) === "[object Object]" &&
          filterCallback(value, searchStr)
        ) {
          isPushable = true;
          return;
        }
        if ((value + "").trim().toString().toLowerCase().includes(searchStr)) {
          isPushable = true;
        }
      });
    }
    return isPushable;
  };

  function handleDataFiltering(evt) {
    setFilterQuery(evt.target.value);

    if (tableData.length !== 0 && evt.target.value.trim() !== "") {
      let searchStr = evt.target.value.trim().toLowerCase();
      let filteringArr = tableData.rows ? tableData.rows : tableData.trips;

      setFilteredData(
        filteringArr.filter((row) => filterCallback(row, searchStr))
      );
    }
  }

  return (
    <>
      <div className="card">
        {alert && (
          <Alert msg={error?.message} setAlert={setAlert} type="danger" />
        )}
        <div className="card__header">
          <Tabs
            heading="products"
            data={[
              { name: "Hammasi", tabName: "all", isActive: true },
              { name: "Aktiv", tabName: "active" },
              { name: "Qoralama", tabName: "draft" },
            ]}
          />
          <button className="card__header-button" type="button">
            <AddIcon className="card__header-button-icon" />
            <span className="card__header-button-text">Mahsulot qo’shish</span>
          </button>
        </div>
        <div className="card__body">
          <div id="products-all">
            <div className="card__body-filter">
              <div className="card__body-filter-top">
                <div className="card__body-filter-top-search">
                  <SearchInput handleSearch={handleSearch} />
                  <SearchResult data={[{}]} isOpen={isSearching} />
                </div>
                <div className="card__body-filter-top-by">
                  <Filter />
                </div>
              </div>
              <div className="card__body-filter-bottom"></div>
            </div>
            <table className="card__body-table">
              <thead className="card__body-table-head">
                <tr className="card__body-table-head-row">
                  {headerOptions.map((headerOption, headerIndex) => (
                    <th
                      className="card__body-table-element card__body-table-head-row-heading"
                      key={"id_header_" + headerIndex}
                    >
                      {headerOption}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="card__body-table-body">
                {tableData &&
                  (filterQuery.trim().length > 0
                    ? filteredData
                    : tableData?.rows
                    ? tableData?.rows
                    : []
                  ).map((item, itemIndex) => (
                    <tr
                      className="card__body-table-body-row"
                      key={"id_row_" + item[idName]}
                    >
                      {tableOptions.map((prop, propIndex) => (
                        <td
                          className="card__body-table-element card__body-table-body-row-description"
                          key={"id_row_" + item[idName] + "_prop_" + propIndex}
                        >
                          {typeof prop == "function" ? prop(item) : item[prop]}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div id="products-active"></div>
          <div id="products-draft"></div>
        </div>
        <div className="card__footer">
          <div className="card__footer-left">
            {tableData?.count} dan {(currentPage - 1) * pageSize + 1}
            {"-"}
            {tableData?.count < currentPage * pageSize
              ? tableData?.count
              : currentPage * pageSize}
          </div>
          <div className="card__footer-right">
            <div className="card__footer-right-show">
              <label className="card__footer-right-show-label">
                Ko'rsatish
              </label>
              <select
                className="card__footer-right-show-select"
                defaultChecked={pageSize}
                onChange={(evt) => setPageSize(Number(evt.target.value))}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            {tableData && tableData?.count && (
              <Pagination
                onPageChange={setCurrentPage}
                totalCount={tableData.count}
                currentPage={currentPage}
                pageSize={pageSize}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Table);
