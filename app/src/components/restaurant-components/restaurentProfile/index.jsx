import React, { Fragment } from 'react'

const index = ({ title, description, createdAt, category }) => {
  return (
    <Fragment>
      <div className="bg-white w-full h-72 p-6 border-t-4 border-orange-400 ">
        <div className="image overflow-hidden">
          {/* <img className="h-auto w-full mx-auto"
            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
            alt="" /> */}
        </div>
        <h1 className="text-orange-500 pb-4 font-bold  text-2xl leading-8 my-1">{title}</h1>
        <h3 className="text-gray-600 font-lg text-semibold leading-6">{category}</h3>
        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{description}</p>
        <ul
          className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
          <li className="flex items-center py-3">
            <span>Status</span>
            <span className="ml-auto"><span
              className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
          </li>
          <li className="flex items-center py-3">
            <span>Created at</span>
            <span className="ml-auto"> {new Date(createdAt).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

export default index
