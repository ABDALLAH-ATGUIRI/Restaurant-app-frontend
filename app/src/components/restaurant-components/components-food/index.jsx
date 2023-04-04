import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

export const HeroCategory = ({ title, description, image, index }) => {

    return (
        <Fragment>
            <div className='xl:w-[39%]  lg-[45%] w-full  text-white p-10 bg-gradient-to-r from-orange-600 to-orange-300 rounded-3xl flex items-center relative'>
                <div className='w-full flex flex-col justify-center lg:h-72'>
                    <h1 className='text-2xl'>{title}</h1>
                    <div className='text-sm p-2 font-normal my-6'> <p>{description}</p></div>
                    <div className='flex flex-row'>
                        <button className='bg-gray-100 text-sm rounded-2xl px-14 p-3 font-bold text-black'>View items</button>
                    </div>
                </div>
                <div className='h-full relative w-full'>
                    <Img src={image} alt="Hero" srcset="" />
                </div>
            </div>
        </Fragment>
    )
}

export const SmallCategory = ({ title, description, image, index }) => {


    const darkColor = () => {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    };



    const Container = styled.div`
background: linear-gradient(130deg, ${darkColor()} 0%, ${darkColor()}  90%);
border-radius: 20px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
transition: all 0.3s ease-in-out;
&:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
}
 `


    return (
        <Fragment>
            <Container className={`xl:w-[18%] lg:w-[30%] sm:w-[45%]  text-white p-10 bg-gradient-to-r  rounded-3xl relative`} >
                <div className='relative w-full h-32'>
                    <SmallImg src={image} alt="Hero" srcset="" />
                </div>
                <div className='w-full flex flex-col justify-center md:h-64'>
                    <h1 className='md:text-2xl text-sm mt-8'>{title}</h1>
                    <div className='md:text-sm text-xs py-4 font-normal my-2'> <p>{description}</p></div>
                    <div className='flex flex-row'>
                        <button className='bg-gray-100 md:text-sm text-xs rounded-2xl md:px-10 px-4 p-2 font-bold text-black'>View items</button>
                    </div>
                </div>
            </Container>
        </Fragment>)
}


const Img = styled.img`
width: 400px;
height: 400px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 14%;
right: 0;
margin: auto;
animation: animate 3s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(30px);
    }
}`;


const SmallImg = styled.img`
width: 200px;
height: 200px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 3s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(10px);
    }  `;

