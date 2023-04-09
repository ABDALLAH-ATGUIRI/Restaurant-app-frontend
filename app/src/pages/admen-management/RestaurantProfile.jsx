import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { instance } from '../../utils/api/axios';
import ProfileComponent from '../../components/restaurant-components/restaurentProfile';
import MyMap from '../../components/global/MyMap';
import EditModal from '../../components/FormModels/restaurant/editModel';

const RestaurantProfile = () => {
    const target = window.location.pathname.split("/")[2].toLowerCase();
    const token = localStorage.getItem("token");
    const { "*": RestaurantId } = useParams();
    const [open, setOpen] = useState(false);
    const [restaurant, setRestaurant] = useState({});


    // get data one restaurant by id
    const fetchTable = async () => {
        try {
            await instance.get(`${target}/${RestaurantId}`, {
                headers: { Authorization: `Bearer ${token}` }
            }).then((res) => {
                setRestaurant(res.data);
                // setTotalRows(res.data.count);
                // setLoading(false);
                console.log(res.data);
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
                                        <span className="text-green-500">
                                            <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </span>
                                        <span>Localsation</span>
                                    </div>
                                    <div className="grid grid-cols-3 w-full h-full">
                                        <MyMap />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mx-2 h-64">

                            <div className="bg-white w-full p-6 h-full border-t-4 border-orange-400">
                                <EditModal />
                            </div>


                            {/* <div className="bg-white p-3 shadow-sm rounded-sm">

                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Experience</span>
                                        </div>
                                        <ul className="list-inside space-y-2">
                                            <li>
                                                <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path fill="#fff"
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Education</span>
                                        </div>
                                        <ul className="list-inside space-y-2">
                                            <li>
                                                <div className="text-teal-600">Masters Degree in Oxford</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div className="text-teal-600">Bachelors Degreen in LPU</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div >
            </div >
        </Fragment >
    )
}

export default RestaurantProfile