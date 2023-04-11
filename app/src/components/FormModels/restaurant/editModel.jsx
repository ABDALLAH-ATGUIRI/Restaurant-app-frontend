import React, { Fragment, useEffect, useMemo, useState } from "react";
import useForm from "../../../utils/lib/useForm";
import validate from "../../../utils/validators/leadFormValidator";
import toast from "react-hot-toast";
import { instance } from "../../../utils/api/axios";
import MyMap from "../../global/MyMap";

const EditModal = ({ tableList, setRestaurant, target }) => {
  const [formSchema, setFormSchema] = useState({});
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });


  const handleModalSubmit = useMemo(() => {
    return async () => {
      try {
        return await instance.post(target, formSchema).then((res) => {
          if (res.data.success) {
            toast.dismiss();
            toast.success("All is good");
            setFormSchema({});
            // submit();
          }
        }).catch((err) => {
          toast.dismiss();
          toast.error("Something went wrong");
        });
      } catch (error) {
        toast.dismiss();
        toast.error("Something went wrong");
      }
    };
  }, [formSchema, setFormSchema, setRestaurant, target]);

  const {
    handleSubmit,
    handleChange: handleFormChange,
    values,
    errors
  } = useForm(handleModalSubmit, validate, formSchema, setFormSchema);

  const [file, setFile] = useState();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Fragment>
      <div className=" w-full h-full z-20 flex text-gray-500 justify-center items-start">
        <div className="bg-white w-full p-8 ">
          <div className="flex justify-between">
            <div className="space-y-1 pb-10">
              <h2 className="text-xl font-bold text-gray-900">Edit {target}</h2>

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
                  placeholder="+212623779270"
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
                  maxLength={50}
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

                {errors?.lastName && (
                  <span className="text-xs text-red-500">
                    {errors?.lastName}
                  </span>
                )}
              </label>
            </div>

            <div className="sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    onClick={handleModalSubmit}
                    type="submit"
                    className="w-full mt-6 bg-orange-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
                  >
                    Edit {target}
                  </button>

                </span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Fragment>

  );
};

export default EditModal;
