import React, { Fragment, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Pagination from "../global/Pagination";
import HeaderTable from "./HeaderTable";
import { instance } from "../../utils/api/axios";
import AddModal from "../FormModels/restaurant/addModal";
import { FilterComponent } from "../global/FilterComponent";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
const Table = ({ manualPagination = true, target = null }) => {


  // If target is null, then the table will be rendered with the current path name
  // If you want to render the table with a specific path name, you can pass it as a prop
  const reference =
    target || window.location.pathname.split("/")[2].toLowerCase();
  const token = localStorage.getItem("token");
  const [tableList, setTableList] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [formSchema, setFormSchema] = useState({});
  const [displayEdit, setDisplayEdit] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [isLoading, setLoading] = useState(true);

  // get all data of table list from api
  const fetchTable = async () => {
    try {
      return await instance.get(`${reference}?page=${currentPage}&rowsPerPage=${rowsPerPage}&keyword=${filterText}`, {
        headers: { Authorization: `Bearer ${token}` }
      }).then((res) => {
        setTableList(res.data.restaurants);
        setTotalRows(res.data.count);
        setLoading(false);
      })
        .catch((err) => {
          console.error(err);
        });

    } catch (error) {
      console.error("error", error);
    }
  };


  useEffect(() => {
    fetchTable();
  }, [displayEdit, currentPage, rowsPerPage, filterText]);
  return (
    tableList.length >= 0 && (
      <Fragment>
        <div className="flex flex-col relative">
          <HeaderTable setShowDialog={setShowDialog} target={reference}>
            <FilterComponent
              filterText={filterText}
              setFilterText={setFilterText}
            />
          </HeaderTable>

          <AddModal
            setFormSchema={setFormSchema}
            showDialog={showDialog}
            setShowDialog={setShowDialog}
            target={reference}
          />

          <div className="flex flex-col min-h-[80vh] mb-20">
            {tableList.length > 0 ? (
              tableList.map((items) => {
                return (
                  <div className={'p-2 px-6'}>
                    <div className=" w-full h-full bg-white lg:flex drop-shadow-xl border-2 border-orange-400 rounded-lg">
                      <div className=" w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 pl-8 flex items-center  justify-between leading-normal">
                        <div className="my-2">
                          <div className="text-gray-900 font-bold text-2xl mb-2">
                            {items.restaurantName}
                          </div>
                          <p className="text-gray-700 text-sm">
                            {items.specialty} / {items.description}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div className="text-gray-700 text-sm mr-4">
                            {new Date(items.createdAt).toLocaleDateString(
                              "en-us",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                              }
                            )}
                          </div>
                        </div>

                      </div>
                      <div class="">
                        <Link to={`/admin/${reference}/${items._id}`} className="bg-orange-500 hover:bg-orange-400 font-extrabold text-white rounded-r-lg h-full p-8 flex items-center text-sm">
                          <HiOutlineExternalLink size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className=" w-full bg-white  lg:max-w-full lg:flex drop-shadow-xl border-2 border-blue-200 p-8">
                <h1 className="text-center w-full font-bold text-xl">
                  Aucune donnée disponible !
                </h1>
              </div>
            )}
          </div>

          {
            /* if you want to use manual pagination, you can pass it as a prop to the table component */
            manualPagination && (
              <Pagination
                pageChangeHandler={setCurrentPage}
                totalRows={totalRows}
                rowsPerPage={rowsPerPage}
                onLimit={setRowsPerPage}
              />
            )
          }
        </div>
      </Fragment>
    )
  );
};

export default Table;
