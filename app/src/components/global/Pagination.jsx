import React, { useState, useEffect } from "react";
import { Button, PageButton } from "../../shared/Button";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

const Pagination = ({ pageChangeHandler, totalRows, rowsPerPage, onLimit }) => {
	// Calculating max number of pages
	const noOfPages = Math.ceil(totalRows / rowsPerPage);

	// Creating an array with length equal to no.of pages
	const pagesArr = [...new Array(noOfPages)];

	// State variable to hold the current page. This value is
	// passed to the callback provided by the parent
	const [currentPage, setCurrentPage] = useState(1);

	// Navigation arrows enable/disable state
	const [canGoBack, setCanGoBack] = useState(false);
	const [canGoNext, setCanGoNext] = useState(true);

	// Onclick handlers for the butons
	const onNextPage = () => setCurrentPage(currentPage + 1);
	const onPrevPage = () => setCurrentPage(currentPage - 1);
	const onPageSelect = (pageNo) => setCurrentPage(pageNo);

	// Disable previous and next buttons in the first and last page
	// respectively
	useEffect(() => {
		if (noOfPages === currentPage) {
			setCanGoNext(false);
		} else {
			setCanGoNext(true);
		}
		if (currentPage === 1) {
			setCanGoBack(false);
		} else {
			setCanGoBack(true);
		}
	}, [noOfPages, currentPage]);

	// To set the starting index of the page
	useEffect(() => {
		const skipFactor = (currentPage);
		// Some APIs require skip for paginaiton. If needed use that instead
		pageChangeHandler(skipFactor);
	}, [currentPage]);
	return (
		<div className="py-3 flex items-center bottom-0 justify-between fixed bg-slate-100 z-0 w-5/6 md:w-full pr-28 pl-8">
			<div className="flex-1 flex justify-between sm:hidden">
				<Button onClick={() => onPrevPage()} disabled={!canGoBack}>
					Previous
				</Button>
				<Button onClick={() => onNextPage()} disabled={!canGoNext}>
					Next
				</Button>
			</div>
			<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<div className="flex gap-x-2">
					<span className="text-sm text-gray-700">
						Page <span className="font-medium">{currentPage}</span>{" "}
						of{" "}
						<span className="font-medium">{pagesArr.length}</span>
					</span>
					{/* <select
						value={state.pageSize}
						onChange={(e) => {
							setPageSize(Number(e.target.value));
						}}
					>
						{[5, 10, 20].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</select> */}
				</div>
				<div>
					<nav
						className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
						aria-label="Pagination"
					>
						<PageButton
							className="rounded-l-md"
							onClick={() => onPageSelect(1)}
							disabled={!canGoBack}
						>
							<span className="sr-only">First</span>
							<AiOutlineDoubleLeft
								size={20}
								className="h-5 w-5"
								aria-hidden="true"
							/>
						</PageButton>
						<PageButton
							onClick={() => onPrevPage()}
							disabled={!canGoBack}

						>
							<span className="sr-only">Previous</span>
							<HiChevronLeft
								className="h-5 w-5"
								aria-hidden="true"
							/>
						</PageButton>
						<PageButton disabled={true}>

							<select className="text-sx p-0 m-0 h- text-center border-none flex text-black" defaultValue={10} onChange={(e) => onLimit(Number(e.target.value))}>
								{[6, 10, 15, 20, 30, 50, 100].map((pageSize) => (
									<option key={pageSize} value={pageSize}>
										{pageSize}
									</option>
								))}
							</select>
							{/* <span className="h-5 w-5"
								aria-hidden="true">{totalRows}</span> */}
						</PageButton>
						<PageButton
							onClick={() => onNextPage()}
							disabled={!canGoNext}
						>
							<span className="sr-only">Next</span>
							<HiChevronRight
								className="h-5 w-5"
								aria-hidden="true"
							/>
						</PageButton>
						<PageButton
							className="rounded-r-md"
							onClick={() => onPageSelect(noOfPages)}
							disabled={!canGoNext}
						>
							<span className="sr-only">Last</span>
							<AiOutlineDoubleRight
								className="h-5 w-5"
								aria-hidden="true"
							/>
						</PageButton>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
