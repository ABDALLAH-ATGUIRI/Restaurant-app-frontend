import React from "react";

const TeadTable = ({ columns }) => {
	// console.log(columns)
	return (
		<thead className="bg-gray-50 border-b-2 border-gray-200 rounded-lg">
			<tr>
				{columns.map((elem, index) => {
					return (
						<th key={`thcan${index}`} className="w-36 p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
							{elem?.item}
						</th>
					);
				})}
				{/* <th className="w-20 p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
					id
				</th>
				<th className=" w-36 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
					Full name
				</th>
				<th className="w-36 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
					email
				</th>
				<th className="w-36 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
					phone
				</th>

				<th className=" max-w-xs break-all p-3 text-sm font-semibold tracking-wide text-left">
					comment
				</th>
				<th className="w-20 p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
					status
				</th> */}
			</tr>
		</thead>
	);
};

export default TeadTable;
