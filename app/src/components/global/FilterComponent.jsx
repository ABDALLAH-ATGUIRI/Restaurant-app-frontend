import React, { Fragment } from 'react'
import { MdClear } from 'react-icons/md'
import { FiFilter } from 'react-icons/fi'

export const FilterComponent = ({ filterText, setFilterText }) => {

  const onClear = () => {
    if (filterText) {
      setFilterText("");
    }
  };

  return (
    <Fragment>
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 pointer-events-none">
            <FiFilter size={20} />
          </div>
          <input type="text" id="default-search" className="block w-96 p-2 pl-10 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-100   "
            placeholder="Search"
            value={filterText}
            onChange={(e) => { setFilterText(e.target.value) }}
            required />
          {filterText && <button type="button" className=" absolute right-2.5 bottom-0.5 font-medium rounded-lg text-sm py-2" onClick={onClear}><MdClear size={20} /></button>}
        </div>
      </form>
    </Fragment>
  )
}
