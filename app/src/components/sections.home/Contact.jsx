import React, { Fragment } from 'react'
import ContactImg from '../../assets/images/women-reseption.png'

export const Contact = () => {
    return (
        <Fragment>
                <div className='w-full h-full grid grid-cols-5 px-20 bg-white py-16'>
                    <div className="w-full h-5/6 left-0 top-0 flex flex-col col-span-3 text-gray-700 justify-center items-start">
                        <div className="h-full w-full px-4 mx-auto max-w-screen-md">
                            <h1 className=' text-5xl tracking-tight pb-10 pt-4 font-bold text-orange-500 dark:text-white'>Contact Us</h1>

                            <div className='w-full left-0 top-0 flex flex-col col-span-2 text-gray-700 justify-center items-start'>
                                <p className=' mb-8 lg:mb-10 font-light text-gray-500 dark:text-gray-400 sm:text-lg '>
                                    You can reach us via email, phone, or through our website's contact form. Our dedicated customer support team is available 24/7 to assist you with any issues or inquiries you may have. We value your feedback and take every opportunity to improve our services, so please let us know how we can make your experience with Uber Food even better.
                                </p>
                            </div>
                            <form action="#" className="space-y-8 w-full">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Leave a comment..."></textarea>
                                </div>
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-700 sm:w-fit hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Send message</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-span-2 md:px-10 w-full'>
                        <img src={ContactImg} className="w-full object-fill" alt="" />
                    </div>
                </div>

        </Fragment>
    )
}
