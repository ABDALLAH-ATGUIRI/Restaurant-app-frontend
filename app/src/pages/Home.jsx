import React, { Fragment } from 'react'
import Hero from '../components/Hero'

export const Home = () => {
    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center h-screen">
                <Hero/>
            </div>
        </Fragment>
    )
}
