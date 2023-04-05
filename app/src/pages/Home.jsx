import React, { Fragment } from 'react'
import Intro from '../components/sections.home/Intro'
import OurService from '../components/sections.home/OurService'

export const Home = () => {
    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center">
                <Intro/>
                <OurService/>
            </div>
        </Fragment>
    )
}
