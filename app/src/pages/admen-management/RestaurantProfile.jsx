import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { instance } from '../../utils/api/axios';
import ProfileComponent from '../../components/restaurant-components/restaurentProfile';
import MyMap from '../../components/global/MyMap';
import EditModal from '../../components/FormModels/restaurant/editModel';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineMenuBook } from 'react-icons/md'
import { HiOutlineExternalLink } from 'react-icons/hi';



const RestaurantProfile = () => {
    const target = window.location.pathname.split("/")[2].toLowerCase();
    const { "*": RestaurantId } = useParams();
    const [restaurant, setRestaurant] = useState({});


    // get data one restaurant by id
    const fetchTable = async () => {
        try {
            await instance.get(`${RestaurantId}`).then((res) => {
                setRestaurant(res.data);
            }).catch((err) => {
                console.error(err);
            });

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTable()
    }, [])

    return (
        <Fragment>
            <div className="flex flex-col h-screen text-white w-full ">
                <div className=" my-5 pl-6">
                    <div className="md:flex gap-10 justify-between px-8 no-wrap w-full md:-mx-2 ">
                        <div className='md:flex w-1/3 gap-10 flex-col no-wrap md:-mx-2 '>
                            <ProfileComponent title={restaurant.restaurantName} description={restaurant.description} createdAt={restaurant.createdAt} category={restaurant.specialty} />

                            <div className="bg-white w-full p-3 border-t-4 border-orange-400">
                                <div className="my-4"></div>
                                <div className="bg-white p-3 hover:shadow w-full">
                                    <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                        <span className="text-orange-500">
                                            <FaMapMarkerAlt size={20} />
                                        </span>
                                        <span>Location</span>
                                    </div>
                                    <div className="grid grid-cols-3 w-full h-full">
                                        <MyMap />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white w-full p-3 border-t-4 border-orange-400">
                                <div className="my-4"></div>
                                <div className="bg-white p-3 hover:shadow w-full">
                                    <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                        <span className="text-orange-500">
                                            <MdOutlineMenuBook size={20} />
                                        </span>
                                        <span>Menu book </span>
                                    </div>
                                    <div className=" w-full h-full">
                                        <Link
                                            to={`menu`}
                                            className="flex justify-around w-full mt-6 bg-orange-500 text-white text-sm font-bold p-4 rounded-md hover:bg-orange-600 transition duration-300"
                                        >
                                            Menu book <HiOutlineExternalLink size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="w-full mx-2 h-64">
                            <div className="bg-white text-lg w-full h-full border-t-4 border-orange-400">
                                <EditModal restaurant={restaurant} setTableList={setRestaurant} target={target} />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </Fragment >
    )
}

export default RestaurantProfile