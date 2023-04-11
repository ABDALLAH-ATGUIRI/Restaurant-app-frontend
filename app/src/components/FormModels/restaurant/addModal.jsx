import React, { Fragment, useEffect, useMemo, useState } from "react";
import axios from "axios";
import useForm from "../../../utils/lib/useForm";
import validate from "../../../utils/validators/leadFormValidator";
import toast from "react-hot-toast";
import { instance } from "../../../utils/api/axios";
import MyMap from "../../global/MyMap";

const AddModal = ({ setTableList, showDialog, setShowDialog, target }) => {
  const close = () => setShowDialog(false);
  const [formSchema, setFormSchema] = useState({});
  const [coordinates, setCoordinates] = useState({ latitude: 33.60, longitude: -7.63 });

  const handleModalSubmit = useMemo(() => {

    return async () => {
      try {
        setFormSchema({ ...formSchema, location: coordinates, menu: [] });

        return await instance.post(target, formSchema).then((res) => {
          if (res.data.success) {
            toast.dismiss();
            toast.success("All is good");
            setFormSchema({});
            // submit();
            close();
          }
        })
          .catch((err) => {
            toast.dismiss();
            toast.error("Something went wrong");
          });
      } catch (error) {
        toast.dismiss();
        toast.error("Something went wrong");
      }
    };
  }, [formSchema, setFormSchema, setTableList, target, close]);

  const {
    handleSubmit,
    handleChange: handleFormChange,
    values,
    errors,
  } = useForm(handleModalSubmit, validate, formSchema, setFormSchema);




  return (
    showDialog && (
      <Fragment>
        <div className="bg-black/30  top-0 absolute w-full h-full z-10 pointer"></div>
        <div className="absolute w-full h-full z-20 flex justify-center items-start">
          <div className="bg-white lg:w-4/6 md:5/6 w-full p-10 ">
            <div className="flex justify-between">
              <div className="space-y-1 pb-10">
                <h2 className="font-bold text-gray-900">Add a New {target}</h2>
                {/* <p className="text-sm font-medium leading-5 text-gray-500">
                <em>Please fill out all inputs.</em>
              </p> */}
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block space-y-2">
                  <span className="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600">
                    Restaurant Name
                  </span>
                  <input
                    onChange={handleFormChange}
                    value={values?.restaurantName || ""}
                    placeholder="ALLO CHEF"
                    type="text"
                    name="restaurantName"
                    className="w-full border border-gray-100 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-teal-200 focus:ring-1 focus:ring-teal-200"
                  />
                  {errors?.restaurantName && (
                    <span className="text-xs text-red-500">
                      {errors?.restaurantName}
                    </span>
                  )}
                </label>
              </div>
              <div className="mb-5">
                <label className="block space-y-2">
                  <span className="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600">
                    status
                  </span>
                  <select
                    id={94}
                    name="specialty"
                    value={values?.specialty || "DEFAULT"}
                    onChange={handleFormChange}
                    className="w-full border border-gray-100 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-teal-200 focus:ring-1 focus:ring-teal-200"
                    aria-label="Default select example"
                  >
                    <option value="DEFAULT" disabled>Specialty</option>
                    <option value="fast food">fast food</option>
                    <option value="Family style"> Family style</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Bars & Pubs">Bars & Pubs</option>
                    <option value="Buffet">Buffet</option>
                    <option value="Destination Restaurant">Destination Restaurant</option>
                    <option value="Baledi">Baledi</option>
                  </select>
                  {errors?.status && (
                    <span className="text-xs text-red-500">
                      {errors?.status}
                    </span>
                  )}
                </label>
              </div>

              <div className="mb-5">
                <label className="block space-y-2">
                  <span className="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600">
                    Phone
                  </span>

                  <input
                    onChange={handleFormChange}
                    value={values?.phone || ""}
                    placeholder="123-456-789"
                    // type="tel"
                    type="text"
                    name="phone"
                    className="w-full border border-gray-100 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-teal-200 focus:ring-1 focus:ring-teal-200"
                  />
                  {errors?.phone && (
                    <span className="text-xs text-red-500">
                      {errors?.phone}
                    </span>
                  )}
                </label>
              </div>

              <div className="mb-5">
                <label className="block space-y-2">
                  <span className="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600">
                    Description
                  </span>

                  <input
                    onChange={handleFormChange}
                    value={values?.description || ""}
                    placeholder="Last name"
                    type="text"
                    name="description"
                    maxLength={100}
                    className="w-full border border-gray-100 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-teal-200 focus:ring-1 focus:ring-teal-200"
                  />
                  {errors?.lastName && (
                    <span className="text-xs text-red-500">
                      {errors?.lastName}
                    </span>
                  )}
                </label>
              </div>

              <div className="mb-5">
                <label className="block space-y-2">
                  <span className="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600">
                    Location
                  </span>
                  <div className="flex relative flex-col w-full h-96 ">
                    <MyMap setCoordinates={setCoordinates} coordinates={coordinates} />
                  </div>
                </label>
              </div>

              <div className="sm:flex sm:flex-row-reverse mt-16">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    onClick={() => {
                      close();
                      setFormSchema({});
                    }}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                    Cancel
                  </button>
                  <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      onClick={handleModalSubmit}
                      type="submit"
                      className="inline-flex justify-center w-max rounded-md border border-transparent px-4 py-2 bg-teal-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Add {target}
                    </button>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default AddModal;
